import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import {
  generateNonce,
  getNonceMessage,
  multerUploader,
  verifySignature,
} from './helpers';

const prisma = new PrismaClient();

export function file(name: string, type: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    multerUploader.single(name)(req, res, () => {
      const file = req.file;
      let error;
      if (!file) {
        error = {
          msg: 'file not found',
          param: name,
          location: 'body',
        };
      } else if (!file.mimetype.includes(type)) {
        error = {
          msg: 'invalid file format',
          param: name,
          location: 'body',
        };
      }
      if (error) {
        if (typeof (req as any).fileErrors === 'object') {
          (req as any).fileErrors.push(error);
        } else {
          (req as any).fileErrors = [error];
        }
      }
      next();
    });
  };
}

export function validate(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);
  let errors = result
    .array()
    .concat((req as any).fileErrors || [])
    .concat((req as any).paginationErrors || []);
  if (errors.length !== 0) {
    return res.status(422).json({ errors });
  }
  next();
}

export function authorizeUser(
  addressField: string,
  signatureField: string,
  registering: boolean = false
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const address = req.body[addressField];
    const signature = req.body[signatureField];

    // get the lancer
    let lancer = await prisma.freelancer.findUnique({
      where: { address: address as string },
    });
    if (registering) {
      if (!lancer)
        return res.status(400).json({ message: 'nonce not generated yet' });
      if (lancer.registered)
        return res.status(400).json({ message: 'user already registered' });
    } else {
      if (!lancer || !lancer.registered)
        return res.status(400).json({ message: 'lancer not registered' });
    }

    // Verify Signature
    const nonceMessage = getNonceMessage(lancer.nonce);
    const isSignValid = verifySignature(nonceMessage, signature, address);
    if (!isSignValid)
      return res.status(401).json({ message: 'invalid signature' });

    // update the nonce
    await prisma.freelancer.update({
      data: { nonce: generateNonce(), registered: true },
      where: { address },
    });

    next();
  };
}

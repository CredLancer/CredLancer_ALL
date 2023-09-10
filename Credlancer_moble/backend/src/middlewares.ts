import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import {
  generateNonce,
  getNonceMessage,
  multerUploader,
  verifySignature,
} from "./helpers";

const prisma = new PrismaClient();

export function paginate(defaultLimit = 10) {
  return (req: Request, res: Response, next: NextFunction) => {
    let { limit, page } = req.query;
    const errors = [];
    if (!limit) {
      req.query.limit = defaultLimit.toString();
    } else {
      if (typeof limit === "string") {
        try {
          if (parseInt(req.query.limit as string) <= 0) {
            errors.push({
              msg: "limit value can only be positive number",
              param: "limit",
              location: "query",
            });
          }
        } catch (err) {
          errors.push({
            msg: "invalid limit value",
            param: "limit",
            location: "query",
          });
          req.query.limit = undefined;
        }
      }
    }
    if (!page) {
      req.query.page = "1";
    } else {
      if (typeof page === "string") {
        try {
          if (parseInt(req.query.page as string) <= 0) {
            errors.push({
              msg: "page value can only be positive number",
              param: "page",
              location: "query",
            });
          }
        } catch (err) {
          errors.push({
            msg: "invalid page value",
            param: "page",
            location: "query",
          });
          req.query.page = undefined;
        }
      }
    }
    if (errors.length !== 0) (req as any).paginationErrors = errors;
    else
      req.query.offset = (
        Number(req.query.limit) *
        (Number(req.query.page) - 1)
      ).toString();
    next();
  };
}

export function file(name: string, type: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    multerUploader.single(name)(req, res, () => {
      const file = req.file;
      let error;
      if (!file) {
        error = {
          msg: "file not found",
          param: name,
          location: "body",
        };
      } else if (!file.mimetype.includes(type)) {
        error = {
          msg: "invalid file format",
          param: name,
          location: "body",
        };
      }
      if (error) {
        if (typeof (req as any).fileErrors === "object") {
          (req as any).fileErrors.push(error);
        } else {
          (req as any).fileErrors = [error];
        }
      }
      next();
    });
  };
}

// export function files(name, type, min = 1, max = 5) {
//     return (req, res, next) => {
//         let error;
//         if (!req.files || !req.files[name]) {
//             if (min === 0) {
//                 if (!req.files)
//                     req.files = {};
//                 req.files[name] = [];
//                 return next();
//             }
//             error = {
//                 msg: "files not found",
//                 param: name,
//                 location: "body"
//             };
//         } else {
//             let files = req.files[name];
//             if (files.length === undefined) {
//                 req.files[name] = [files];
//                 files = req.files[name];
//             }
//             if (files.some(file => !file.mimetype.includes(type))) {
//                 error = {
//                     msg: "invalid file format",
//                     param: name,
//                     location: "body"
//                 };
//             } else if (files.length < min) {
//                 error = {
//                     msg: `minimum ${min} files are required`,
//                     param: name,
//                     location: "body"
//                 }
//             } else if (files.length > max) {
//                 error = {
//                     msg: `maximum ${max} files allowed`,
//                     param: name,
//                     location: "body"
//                 }
//             }
//         }
//         if (!error) return next();
//         if (typeof req.fileErrors === 'object') {
//             req.fileErrors.push(error);
//         } else {
//             req.fileErrors = [error];
//         }
//         return next();
//     }
// }

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
    let lancer = await prisma.lancer.findUnique({
      where: { address: address as string },
    });
    if (registering) {
      if (!lancer)
        return res.status(400).json({ message: "nonce not generated yet" });
      if (lancer.registered)
        return res.status(400).json({ message: "user already registered" });
    } else {
      if (!lancer || !lancer.registered)
        return res.status(400).json({ message: "lancer not registered" });
    }

    // Verify Signature
    const nonceMessage = getNonceMessage(lancer.nonce);
    const isSignValid = verifySignature(nonceMessage, signature, address);
    if (!isSignValid)
      return res.status(401).json({ message: "invalid signature" });

    // update the nonce
    await prisma.lancer.update({
      data: { nonce: generateNonce(), registered: true },
      where: { address },
    });

    next();
  };
}

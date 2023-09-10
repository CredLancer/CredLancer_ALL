import { PrismaClient, Prisma } from '@prisma/client';
import CID from 'cids';
import { Router } from 'express';
import { body, param } from 'express-validator';
import Joi from 'joi';

const proposalRouter = Router();
const prisma = new PrismaClient();

const proposalValidationSchema = Joi.object({
  content: Joi.string().min(10).required(),
  freelancerId: Joi.string().required(),
  questId: Joi.string().required(),
  status: Joi.string()
    .valid('PENDING', 'ACCEPTED', 'REJECTED')
    .default('PENDING'),
});

proposalRouter.post('/', async (req, res) => {
  const { error } = proposalValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const proposal = await prisma.proposal.create({
      data: req.body,
    });
    res.json(proposal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create proposal' });
  }
});

proposalRouter.get('/', async (req, res) => {
  try {
    const proposals = await prisma.proposal.findMany();
    res.json(proposals);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch proposals' });
  }
});

proposalRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const proposal = await prisma.proposal.findUnique({
      where: { id: id },
    });
    if (proposal) {
      res.json(proposal);
    } else {
      res.status(404).json({ error: 'Proposal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch proposal' });
  }
});

proposalRouter.put('/:id/approve', async (req, res) => {
  const { id } = req.params;
  try {
    const proposal = await prisma.proposal.update({
      where: { id: id },
      data: { status: 'ACCEPTED' },
    });
    res.json(proposal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to approve proposal' });
  }
});

proposalRouter.put('/proposals/:id/submit-work', async (req, res) => {
  const { id } = req.params;
  const { submittedWork } = req.body;

  // Check if the user is the owner of the proposal
  const proposal = await prisma.proposal.findUnique({ where: { id: id } });
  if (!proposal) {
    return res.status(404).json({ error: 'Proposal not found' });
  }

  // TODO: Check if the user is the owner of the proposal

  // TODO: Upload work to file coin data storage

  try {
    const updatedProposal = await prisma.proposal.update({
      where: { id: id },
      data: { fileCID: submittedWork },
    });
    res.json(updatedProposal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit work' });
  }
});

export default proposalRouter;

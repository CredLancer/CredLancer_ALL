import { PrismaClient, Prisma } from '@prisma/client';
import CID from 'cids';
import { Router } from 'express';
import { body, param } from 'express-validator';

const freelancerRouter = Router();
const prisma = new PrismaClient();

freelancerRouter.get('/', async (req, res) => {
  try {
    const freelancers = await prisma.freelancer.findMany();
    res.json(freelancers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch freelancers' });
  }
});

// GET a single freelancer by address
freelancerRouter.get('/:address', async (req, res) => {
  const { address } = req.params;

  try {
    const freelancer = await prisma.freelancer.findUnique({
      where: { address: address },
    });
    if (freelancer) {
      res.json(freelancer);
    } else {
      res.status(404).json({ error: 'Freelancer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch freelancer' });
  }
});

// POST a new freelancer
freelancerRouter.post('/', async (req, res) => {
  try {
    const freelancer = await prisma.freelancer.create({
      data: req.body,
    });
    res.json(freelancer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create freelancer' });
  }
});

// UPDATE a freelancer by address
freelancerRouter.put('/:address', async (req, res) => {
  const { address } = req.params;
  try {
    const freelancer = await prisma.freelancer.update({
      where: { address: address },
      data: req.body,
    });
    res.json(freelancer);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update freelancer' });
  }
});

// DELETE a freelancer by ID
freelancerRouter.delete('/:address', async (req, res) => {
  const { address } = req.params;
  try {
    await prisma.freelancer.delete({
      where: { address: address },
    });
    res.json({ message: 'Freelancer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete freelancer' });
  }
});

export default freelancerRouter;

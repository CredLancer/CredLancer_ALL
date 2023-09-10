import { PrismaClient, Prisma } from '@prisma/client';
import CID from 'cids';
import { Router } from 'express';
import { body, param } from 'express-validator';

const orgRouter = Router();
const prisma = new PrismaClient();

orgRouter.get('/', async (req, res) => {
  try {
    const orgs = await prisma.org.findMany();
    res.json(orgs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch organizations' });
  }
});

// GET a single freelancer by address
orgRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const org = await prisma.org.findUnique({
      where: { id: id },
    });
    if (org) {
      res.json(org);
    } else {
      res.status(404).json({ error: 'Organization not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch organization' });
  }
});

// POST a new freelancer
orgRouter.post('/', async (req, res) => {
  try {
    const org = await prisma.org.create({
      data: req.body,
    });
    res.json(org);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create organization' });
  }
});

// UPDATE a freelancer by address
orgRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const org = await prisma.org.update({
      where: { id: id },
      data: req.body,
    });
    res.json(org);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update organization' });
  }
});

orgRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.org.delete({
      where: { id: id },
    });
    res.json({ message: 'Organization deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete organization' });
  }
});

export default orgRouter;

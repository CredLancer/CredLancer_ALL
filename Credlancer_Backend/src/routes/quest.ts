import { PrismaClient, Prisma } from '@prisma/client';
import CID from 'cids';
import { Router } from 'express';
import { body, param } from 'express-validator';
import Joi from 'joi';

const questRouter = Router();
const prisma = new PrismaClient();

const questValidationSchema = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  description: Joi.string().min(10).required(),
  reward: Joi.number().min(0).required(),
  employerId: Joi.string().required(), // Assuming employerId is a string; adjust if different
});

questRouter.post('/', async (req, res) => {
  const { error } = questValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const quest = await prisma.quest.create({
      data: req.body,
    });
    res.json(quest);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create quest' });
  }
});

questRouter.get('/', async (req, res) => {
  try {
    const quests = await prisma.quest.findMany();
    res.json(quests);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quests' });
  }
});

questRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const quest = await prisma.quest.findUnique({
      where: { id: id },
    });
    if (quest) {
      res.json(quest);
    } else {
      res.status(404).json({ error: 'Quest not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quest' });
  }
});

export default questRouter;

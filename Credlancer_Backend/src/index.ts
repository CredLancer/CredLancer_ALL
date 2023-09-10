import express from 'express';
import { PORT } from './config';
import cors from 'cors';
import freelancerRouter from './routes/freelancer';
import orgRouter from './routes/org';
import questRouter from './routes/quest';
import proposalRouter from './routes/proposal';
import ipfsRouter from './routes/ipfs';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use('/freelancers', freelancerRouter);
app.use('/organizations', orgRouter);
app.use('/quests', questRouter);
app.use('/proposals', proposalRouter);
app.use('/ipfs', ipfsRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

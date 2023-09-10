import dotenv from 'dotenv';
import { ethers } from 'ethers';

dotenv.config();

export const PORT = parseInt(process.env.PORT || '8000');

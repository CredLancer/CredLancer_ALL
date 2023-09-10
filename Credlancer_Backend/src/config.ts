import dotenv from 'dotenv';
import { ethers } from 'ethers';

dotenv.config();

export const PORT = parseInt(process.env.PORT || '8000');
export const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY || '';
export const LIGHTHOUSE_API_KEY = process.env.LIGHTHOUSE_API_KEY || '';
export const NONCE_TEMPLATE = process.env.NONCE_MESSAGE || 'The Message is: %';

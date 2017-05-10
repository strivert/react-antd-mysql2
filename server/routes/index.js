import express from 'express';
import Card from './Card';

const router = express.Router();
router.use('/card', Card);

export default router;
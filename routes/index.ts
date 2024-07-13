import express from 'express';
import generalRoutes from './generalRoutes'

const router = express.Router();
router.use(generalRoutes)

export default router
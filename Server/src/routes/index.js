import express from 'express';
import taskRouter from './task.route.js';
import userRouter from './user.route.js'


const router = express.Router();

router.use('/auth', userRouter);
router.use('/tasks', taskRouter);

export default router;

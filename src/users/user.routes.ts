import express from 'express';
import { getUsers, createUser } from './user.controller';

export const userRouter = express.Router();

userRouter.get('/users', getUsers);
userRouter.post('/users', createUser);

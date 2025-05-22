import { Request, Response } from 'express';
import { User } from './user.model';

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: 'Error getting users' });
	}
};

export const createUser = async (req: Request, res: Response) => {
	try {
		const newUser = new User(req.body);
		await newUser.save();
		res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ error: 'Error creating user' });
	}
};

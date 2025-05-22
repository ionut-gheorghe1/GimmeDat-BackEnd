import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './connectDB';
import { userRouter } from './users/user.routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 3000, async () => {
	await connectDB();
	console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
});

app.get('/', (req, res) => {
	res.send(`BackEnd for GimmeDat`);
});

app.use('/api', userRouter);

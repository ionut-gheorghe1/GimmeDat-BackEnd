import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send(`BackEnd for GimmeDat`);
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

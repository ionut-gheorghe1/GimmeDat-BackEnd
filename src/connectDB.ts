import mongoose from 'mongoose';

export const connectDB = async () => {
	try {
		const response = await mongoose.connect(process.env.MONGO_URI || '', {
			dbName: 'gimmedat_db'
		});
		if (response) {
			console.log('Connected to MongoDB');
		}
	} catch (error) {
		console.log(error);
	}
};

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true
	},
	email: {
		type: String,
		unique: true
	},
	date: {
		type: Date
	}
});

export const User = mongoose.model('user', UserSchema);

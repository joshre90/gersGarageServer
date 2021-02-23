const mongoose = require('mongoose');

const User = mongoose.model(
	'User',
	new mongoose.Schema({
		First_Name: String,
		Last_Name: String,
		Phone: String,
		email: String,
		password: String,
		roles: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Role',
			},
		],
	})
);

module.exports = User;

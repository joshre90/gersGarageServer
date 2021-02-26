const mongoose = require('mongoose');

const Vehicle = mongoose.model(
	'Vehicle',
	new mongoose.Schema({
		Licence: String,
		id_user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		id_engine: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Engine',
			required: true,
		},
		id_vehicle_type: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Vehicle_Type',
			required: true,
		},
		id_make: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Make',
			required: true,
		},
	})
);

module.exports = Vehicle;

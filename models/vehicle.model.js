const mongoose = require('mongoose');

const Vehicle = mongoose.model(
	'Vehicle',
	new mongoose.Schema({
		Licence: String,
		id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
		id_engine: { type: mongoose.Schema.Types.ObjectId, ref: 'Engine' },
		id_vehicle_type: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Vehicle_Type',
		},
		id_make: { type: mongoose.Schema.Types.ObjectId, ref: 'Make' },
	})
);

module.exports = Vehicle;

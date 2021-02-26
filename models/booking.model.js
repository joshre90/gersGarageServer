const mongoose = require('mongoose');

const Booking = mongoose.model(
	'Booking',
	new mongoose.Schema({
		Comments: { type: String, required: true },
		Status: { type: String, required: true },
		Date: { type: Date, required: true },

		id_vehicle: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Vehicle',
			required: true,
		},
		id_mechanic: { type: mongoose.Schema.Types.ObjectId, ref: 'Mechanic' },
		id_service_type: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Service_Type',
			required: true,
		},
	})
);

module.exports = Booking;

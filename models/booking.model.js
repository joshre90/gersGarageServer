const mongoose = require('mongoose');

const Booking = mongoose.model(
	'Booking',
	new mongoose.Schema({
		// First_name: String,
		// Last_name: String,
		// Phone: Number,
		Comments: String,
		Status: String,
		Date: String,

		id_vehicle: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' },
		id_mechanic: { type: mongoose.Schema.Types.ObjectId, ref: 'Mechanic' },
		id_service_type: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Service_Type',
		},
	})
);

module.exports = Booking;

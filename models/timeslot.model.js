const mongoose = require('mongoose');

const TimeSlot = mongoose.model(
	'TimeSlot',
	new mongoose.Schema({
		Date: String,
		Slots: {
			s1: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Booking',
				//default: '',
			},
			s2: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Booking',
				//default: '',
			},
			s3: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Booking',
				//default: '',
			},
			s4: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Booking',
				//default: '',
			},
		},
	})
);

module.exports = TimeSlot;

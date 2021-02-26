const mongoose = require('mongoose');

const Invoice = mongoose.model(
	'Invoice',
	new mongoose.Schema({
		Total_price: Number,
		id_booking: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Booking',
			required: true,
		},
		id_stock: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Stock',
			required: true,
		},
	})
);

module.exports = Invoice;

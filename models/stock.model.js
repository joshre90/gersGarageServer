const mongoose = require('mongoose');

const Stock = mongoose.model(
	'Stock',
	new mongoose.Schema({
		Name: String,
		Price: Number,
		Qty: Number,
	})
);

module.exports = Stock;

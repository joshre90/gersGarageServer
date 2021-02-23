const db = require('../models');
const Booking = db.booking;
const Make = db.make;
const Engine = db.engine;
const Vehicle_Type = db.vehicle_type;
const Vehicle = db.vehicle;
const Service = db.service_type;
const Service_Type = db.service_type;
const mongoose = require('mongoose');

exports.allAccess = (req, res) => {
	res.status(200).send('Public Content.');
};

exports.userBoard = (req, res) => {
	res.status(200).send('User Content.');
};

exports.adminBoard = (req, res) => {
	res.status(200).send('Welcome Ger');
};

////////POSTS
//Posting a vehicle
exports.userVehicle = async (req, res) => {
	const vehicle = new Vehicle({
		Licence: req.body.Licence,
		id_user: req.body.id_user,
		id_engine: req.body.engine,
		id_vehicle_type: req.body.vehicle_type,
		id_make: req.body.make,
	});

	await vehicle.save(function (error) {
		if (!error) {
			res.status(201).send('Your vehicle has been added :)');
		} else {
			console.log('Something went wrong');
		}
	});
};

//Posting a booking
exports.userBooking = async (req, res) => {
	const booking = new Booking({
		Comments: req.body.Comments,
		Status: req.body.Status,
		Date: req.body.Date,
		id_vehicle: req.body.id_vehicle,
		id_service_type: req.body.Service,
	});

	await booking.save(function (error) {
		if (!error) {
			res.status(201).send('Booking was registered successfully!');
		} else {
			console.log('Something went wrong');
		}
	});
};

/////GETTERS
//Function to get the list of vehicles makers
//https://stackoverflow.com/questions/24348437/mongoose-select-a-specific-field-with-find
exports.userMakes = async (req, res) => {
	query = Make.find({}).select({ name: 1, _id: 1 });
	await query.exec(function (error, result) {
		if (!error) {
			if (!result) {
				return res.status(500).send('No Data');
			}
			console.log(result);
			return res.json(result);
		}
	});
};

//Function to get the list of Engines
exports.userEngine = async (req, res) => {
	query = Engine.find({}).select({ name: 1, _id: 1 });
	await query.exec(function (error, result) {
		if (!error) {
			if (!result) {
				return res.status(500).send('No Data');
			}
			//console.log(result);
			return res.json(result);
		}
	});
};

//Function to get he list of Vehicles
exports.userVehicleType = async (req, res) => {
	query = Vehicle_Type.find({}).select({ name: 1, _id: 1 });
	await query.exec(function (error, result) {
		if (!error) {
			if (!result) {
				return res.status(500).send('No Data');
			}
			console.log(result);
			return res.json(result);
		}
	});
};

//Function to get the lsit of type services
exports.userServiceList = async (req, res) => {
	query = Service_Type.find().select({ name: 1, _id: 1 });
	await query.exec(function (error, result) {
		if (!error) {
			if (!result) {
				return res.status(500).send('No Data');
			}
			console.log(result);
			return res.json(result);
		}
	});
};

//Getting Users vehicle list
/* exports.vehicleList = async (req, res) => {
	console.log(req.params);
	await Vehicle.find({ id_user: req.params.id }, function (error, results) {
		if (error) return res.status(500).send(error);
		if (results.length == 0) {
			console.log('error');
			return res.status(500).send('This user has not registered cars');
		}
		console.log(results);
		return res.json(results);
	});
}; */

//Getting user registered vehicles
exports.userRegisteredVehicles = async (req, res) => {
	console.log(req.params);
	await Vehicle.aggregate(
		[
			{
				$match: {
					id_user: mongoose.Types.ObjectId(req.params.id),
				},
			},
			{
				$lookup: {
					from: 'engines',
					localField: 'id_engine',
					foreignField: '_id',
					as: 'engines',
				},
			},
			{
				$lookup: {
					from: 'vehicle_types',
					localField: 'id_vehicle_type',
					foreignField: '_id',
					as: 'vehicle_types',
				},
			},
			{
				$lookup: {
					from: 'makes',
					localField: 'id_make',
					foreignField: '_id',
					as: 'makes',
				},
			},
			{ $unwind: '$engines' },
			{ $unwind: '$makes' },
			{ $unwind: '$vehicle_types' },
			{
				$group: {
					_id: {
						License: '$Licence',
						Engine: '$engines.name',
						Make: '$makes.name',
						Vehicle_type: '$vehicle_types.name',
						id_vehicle: '$_id',
					},
				},
			},
			{ $unwind: '$_id' },
		],
		function (error, results) {
			if (error) return res.status(500).send(error);
			if (results.length == 0) {
				console.log('error');
				return res.status(404).send('This user has not registered cars');
			}
			return res.json(results);
		}
	);
};

//Getting user service history
exports.userServiceHistory = async (req, res) => {
	console.log(req.params);
	await Vehicle.aggregate(
		[
			{
				$match: {
					id_user: mongoose.Types.ObjectId(req.params.id),
				},
			},
			{
				$lookup: {
					from: 'engines',
					localField: 'id_engine',
					foreignField: '_id',
					as: 'engines',
				},
			},
			{
				$lookup: {
					from: 'vehicle_types',
					localField: 'id_vehicle_type',
					foreignField: '_id',
					as: 'vehicle_types',
				},
			},
			{
				$lookup: {
					from: 'makes',
					localField: 'id_make',
					foreignField: '_id',
					as: 'makes',
				},
			},
			{
				$lookup: {
					from: 'bookings',
					localField: '_id',
					foreignField: 'id_vehicle',
					as: 'booking',
				},
			},
			{ $unwind: '$engines' },
			{ $unwind: '$makes' },
			{ $unwind: '$vehicle_types' },
			{ $unwind: '$booking' },
			{
				$group: {
					_id: {
						License: '$Licence',
						Engine: '$engines.name',
						Make: '$makes.name',
						Vehicle_type: '$vehicle_types.name',
						Date: '$booking.Date',
						Status: '$booking.Status',
						id_vehicle: '$_id',
					},
				},
			},
			{ $unwind: '$_id' },
		],
		function (error, results) {
			if (error) return res.status(500).send(error);
			if (results.length == 0) {
				console.log('error');
				return res.status(404).send('This user has not registered cars');
			}
			console.log(results);
			return res.json(results);
		}
	);
};

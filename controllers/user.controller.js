const db = require('../models');
/* const Booking = db.booking;
const Make = db.make;
const Engine = db.engine;
const Vehicle_Type = db.vehicle_type;
const Vehicle = db.vehicle;
const Service = db.service_type;
const Service_Type = db.service_type; */
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

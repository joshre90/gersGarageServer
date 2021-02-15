const { authJwt } = require('../middlewares');
const controller = require('../controllers/user.controller');

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			'Access-Control-Allow-Headers',
			'x-access-token, Origin, Content-Type, Accept',
			'Access-Control-Allow-Origin : *'
		);
		next();
	});

	app.get('/api/test/all', controller.allAccess);

	app.get('/api/test/user', [authJwt.verifyToken], controller.userBoard);

	app.get(
		'/api/test/admin',
		[authJwt.verifyToken, authJwt.isAdmin],
		controller.adminBoard
	);

	/* //Get vehicle maker list
	app.get('/api/user/makes', controller.userMakes);

	//Get vehicle type list
	app.get('/api/user/vehicle-type', controller.userVehicleType);

	//Get engine list
	app.get('/api/user/engine', controller.userEngine);

	//Get service types list
	app.get('/api/user/service-type', controller.userServiceList);

	//Get user list of vehicles
	app.get('/api/user/vehicle-list/:id', controller.vehicleList);

	//Get history
	app.get('/api/user/history/:id', controller.userServiceHistory);

	//Get bookings
	app.get('/api/user/bookings/:Date', controller.adminListServices);

	//Post a Vehicle
	app.post('/api/user/vehicle', controller.userVehicle);

	//Post a booking
	app.post('/api/user/booking', controller.userBooking);

	//Post an update of booking for mechanic and status
	app.put(
		'/api/user/update-booking/:id/:Mechanic/:Status',
		controller.adminUpdateBooking
	); */
};

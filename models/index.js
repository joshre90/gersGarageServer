const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require('./user.model');
db.role = require('./role.model');
db.booking = require('./booking.model');
db.engine = require('./engine.model');
db.invoice = require('./invoice.model');
db.make = require('./make.model');
db.mechanic = require('./mechanic.model');
db.service_type = require('./service_type.model');
db.stock = require('./stock.model');
db.vehicle_type = require('./vehicle_type.model');
db.vehicle = require('./vehicle.model');

db.ROLES = ['user', 'admin'];

module.exports = db;

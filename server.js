const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');
const Role = db.role;
var config = require('./config/config');
var mongoose = require('mongoose');

const app = express();

var corsOptions = {
	origin: 'http://localhost:8100',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the application.' });
});

mongoose
	.connect(config.db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})

	//const connection = mongoose.connection;

	.then(() => {
		console.log('Successfully connect to MongoDB.');
		initial();
	})
	.catch((err) => {
		console.error('Connection error', err);
		process.exit();
	});

function initial() {
	Role.estimatedDocumentCount((err, count) => {
		if (!err && count === 0) {
			new Role({
				name: 'user',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'user' to roles collection");
			});

			new Role({
				name: 'admin',
			}).save((err) => {
				if (err) {
					console.log('error', err);
				}

				console.log("added 'admin' to roles collection");
			});
		}
	});
}

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});

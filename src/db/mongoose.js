const mongoose = require('mongoose');
 
const connectionURL = 'mongodb://mongo:27017';

mongoose.connect(`${connectionURL}/task-manager-api`, {
	useNewUrlParser: true,
	useCreateIndex: true
});
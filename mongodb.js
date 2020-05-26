const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';


const id = new ObjectID();

console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {
	useNewUrlParser: true
}, (error, client) => {
	if (error) {
		return console.log('Unable to connect to db');
	}

	console.log('Connected correctly !');

	const db = client.db(database);
});



// db.collection('tasks').updateOne({
// 	completed: false
// }, {
// 	$set: {
// 		completed: true
// 	},
// }).then((result) => {
// 	console.log(result)
// }).catch((error) => {
// 	console.log(error)
// });


// const updatePromise = db.collection('users').updateOne({
// 	_id: new ObjectID("5e9f65aea5592249bb7c3b6c")
// }, {
// 	$set: {
// 		name: 'Tomek22'
// 	},
// 	$inc: {
// 		age: 1
// 	}
// })

// updatePromise.then((result) => {
// 	console.log(result)
// }).catch((error) => {
// 	console.log(error)
// });


// db.collection('users').findOne({ _id: new ObjectID("5e9f62f2e18278498511909a") }, (error, user) => {
// 	if (error) {
// 		return console.log('Unable to fetch')
// 	}

// 	console.log('user : ', user)
// });

// db.collection('users').find({ age: 27 }).toArray((error, users) => {
// 	if (error) {
// 		return console.log('Unable to fetch')
// 	}

// 	console.log('users : ', users)
// });

// db.collection('users').find({ age: 27 }).count((error, count) => {
// 	if (error) {
// 		return console.log('Unable to fetch')
// 	}

// 	console.log('count : ', count)
// });

// db.collection('users').insertOne({
// 	_id: id,
// 	name: 'Vikram',
// 	age: 26
// }, (error, result) => {
// 	if (error) {
// 		return console.log('Unable to insert user')
// 	}

// 	console.log(result.ops)
// })

// db.collection('tasks').insertMany([{
// 	description: 'Clean the house',
// 	completed: true
// }, {
// 	description: 'Renew inspection',
// 	completed: false
// },
// {
// 	description: 'Pot plants',
// 	completed: false
// }
// ], (error, result) => {
// 	if (error) {
// 		return console.log('Unable to insert tasks')
// 	}

// 	console.log(result.ops)
// })
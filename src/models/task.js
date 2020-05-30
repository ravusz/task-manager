const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
	description: {
		type: String,
	},
	completed: {
		type: Boolean
	},
	// relation to user, populate by user data
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User"
	}
}, {
	timestamps: true
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
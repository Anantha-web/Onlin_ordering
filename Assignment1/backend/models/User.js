const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
	type:{
		type:String,
		enum:['vendor','buyer'],
	},
	details:{
		type: Schema.Types.ObjectId,
        required: true,
		refPath:'type'
	},
	email: {
		type: String,
		required: true,
		unique:true,
	},
	password:{
		type:String,
		required:true
	},
	date:{
		type: Date,
		required: false
	}
});

module.exports = User = mongoose.model("Users", UserSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BuyerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	phone:{
		type:String,
		required:true,
	},
	batch:{
		type:String,
		enum:['UG1','UG2','UG3','UG4','UG4']
	}
});

module.exports = Buyer = mongoose.model("Buyer", BuyerSchema);
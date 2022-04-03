const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VendorSchema = new Schema({
	manager_name: {
		type: String,
		required: true
	},
	shop_name:{
		type:String,
		required:true,
	},
	phone:{
		type:String,
		required:true,
	},
	
});

module.exports = Vendor = mongoose.model("Vendor", VendorSchema);
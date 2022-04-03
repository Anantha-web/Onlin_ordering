var express = require("express");
const bcrypt = require("bcrypt");
var funcs = require('../utils/funcs');
var models = require("../models/models");
var router = express.Router();


// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/register", async(req, res) => {
    try{
    	console.log(req.body);
    	var {type,manager_name,shop_name,name,email,password,phone,age,batch} = req.body;
	    if(!type){
	    	return funcs.sendError(res,406,"Missing some required fields");
	    }
	    if(type=="buyer"){
	    	if(!(name,email,password,phone,batch))
	    		return funcs.sendError(res,406,"Missing some required fields");
	    }
	    if(type=="vendor"){
	    	if(!(manager_name,shop_name,email,password,phone))
	    		return funcs.sendError(res,406,"Missing some required fields");
	    }
	    user = await models.User.findOne({email});
	    if(user)
	    	return funcs.sendError(res,406,"User account already exists with this Email");

	    if(type=="buyer"){
	    	buyer = await models.Buyer.create({name,phone,batch});
	    	const salt = await bcrypt.genSalt(10);
	    	password = await bcrypt.hash(password, salt);
	    	user = await models.User.create({
	    		type:"buyer",
	    		details:buyer._id,
	    		email:email,
	    		password:password,
	    		date:new Date(),
	    	})
	    	user = await user.save();
	    	console.log(user);
	    	res.status(200).json({
	    		message:"Registered Sucessfully",
	    	});
	    }
	    if(type=="vendor"){
	    	vendor = await models.Vendor.create({manager_name,shop_name,phone});
	    	const salt = await bcrypt.genSalt(10);
	    	password = await bcrypt.hash(password, salt);
	    	user = await models.User.create({
	    		type:"buyer",
	    		details:vendor._id,
	    		email:email,
	    		password:password,
	    		date:new Date(),
	    	})
	    	user = await user.save();
	    	console.log(user);
	    	res.status(200).json({
	    		message:"Registered Sucessfully",
	    	});
	    }
    }

    catch(err){
    	console.log(err);
    	funcs.sendError(res,500,"Something went wrong");
    }
});

// POST request 
// Login
router.post("/login", async(req, res) => {
	try{
		console.log(req.body);
		const {email,password} = req.body;
		if(!(email,password))
			return funcs.sendError(res,406,"Missing some required fields");
		user = await models.User.findOne({email});
		if(!user)
			return funcs.sendError(res,404,"User with this email not exists");
		const validPassword = await bcrypt.compare(password, user.password);
		if(validPassword){
			return res.status(200).json({
	    		message:"Logged in Sucessfully",
	    		token:'abc'
	    	});
		}
		res.status(401).json({
	    		message:"Authentication failed",
	    });


	}
	catch(err){
		console.log(err);
		funcs.sendError(res,500,"Something went wrong");
	}
});

module.exports = router;


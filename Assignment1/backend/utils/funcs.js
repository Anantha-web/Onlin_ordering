sendError = (res,code,error)=>{
	return res.status(code).json({
		error:error,
	});
};

module.exports = {
	sendError,
}
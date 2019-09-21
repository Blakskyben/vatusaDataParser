const express = require("express"),
	app = express(),
	request = require("request");

app.get("/",(req,res)=>{
	request("http://us.data.vatsim.net/vatsim-data.txt",(err,response,body)=>{
		let data  = body.trim();
		data = data.split(":");
		data = data.filter(data=>data.length > 2);
		res.send(data));
		//Next step - Convert to JSON. Pfffft
	});
});






app.listen(3010);

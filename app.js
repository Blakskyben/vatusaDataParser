const express = require("express"),
	app = express(),
	request = require("request");

app.get("/data/allUsers",(req,res)=>{
	request("http://us.data.vatsim.net/vatsim-data.txt",(err,response,body)=>{
		let data  = body.trim();
		data = data.split(":");
		data = data.filter(data=>data.length > 2);
		console.log(Object.keys(data).length);
		let aircraftData = [];
		for(i=0;i<Object.keys(data).length;i++){
			//Loop through array, delete random shit, and find point A to B (ex: Pilot's Name to Remarks), and create some JSON for that person.
			//23 positions after "PILOT" is each pilot's data.
			if(data[i]=="PILOT"){
				while(i<Object.keys(data).length){
					aircraftData.push(data[i]);
					i++;
				}

			}
		
		}
		res.send(JSON.stringify(aircraftData));
		//Next step - Give each Pilot his/her own JSON "block".
	});
});






app.listen(3010);

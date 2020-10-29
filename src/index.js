const { getUsers } = require('./lib/defs')
const express = require("express"),
	app = express(),
    request = require("request"),
    Axios = require('axios')

getUsers(app);    
app.listen(3010);

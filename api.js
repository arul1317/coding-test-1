const express = require('express');
const app = express();
const routes = require('./express');

app.use(express.json());

app.use('/',routes);

app.listen(5000,()=>{
	console.log("listening at port 5000");
})

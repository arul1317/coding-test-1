
const express = require("express");
const bodyParser = require("body-parser");
const xregexp = require('xregexp');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function(request, response){
    referenceData=request.body.referenceData;
    var transform= JSON.stringify(request.body.payload);
    for(ref in referenceData)
        transform=transform.replace(xregexp(`{${ref}}`, 'g'),referenceData[ref]);
	response.send(JSON.parse(transform));
});		
		
port = process.env.PORT || 3001;
//for setting PORT env variable, type this in cmd prompt: 'set PORT=5000', then ENter.
const server = app.listen(port, () => {
	console.log(`listening on port ${port}...`);
});		
// Import modules

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const replaceString = require('replace-string');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//post method
app.post('/',(req,res)=>
{

	let input = req.body;
	let myJSON = JSON.stringify(input);
	let ref=(input.referenceData);
	let jsonPayload = JSON.stringify(input.payload);

//All reference objects are push into an array
	let listOfObj=[];
	Object.keys(req.body.referenceData).forEach((key,index)=>
	{
	let modi="{"+ key +"}";
	let value=req.body.referenceData[key];

		listOfObj.push({[modi]:value});

	});

//Array objects are converted into single object
let obj = Object.assign({},...listOfObj);

//objects values are mapped and replaced
let RE = new RegExp(Object.keys(obj).join("|"), "gi");
		myJSON = jsonPayload.replace(RE,(matched)=>
		{
return obj[matched];

		});

input=JSON.parse(myJSON);

if(!input || input.text ==="")
{
    let mapDictionary = new Map();

	for(x in ref)
	{
		mapDictionary.set(x,ref[x]);
	}

	let itr=mapDictionary.keys();

	for(let i=0;i<mapDictionary.size;i++)
	{
		const key=itr.next().value;

		myJSON = replaceString(myJSON, '{'+ key +'}', mapDictionary.get(key));

	}
}
	else
{
// checking condition for if input is exisiting
// delete input reference data from the json and input push into the output array.

	if(input)
	{
		delete input['referenceData'];
        output.push(input);
    }
}});

//Output  array declaration
let output=[];

//Post request modified and get on the server
app.get('/', (req,res)=>
{
res.send(output);
console.log("Get response is completed.");
});

//Check the port and listen on the app
let port=process.env.port||8080
app.listen(port,console.log("Server is Running !"));
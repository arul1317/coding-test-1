const express = require('express');
var app = express();
var fs = require('fs');
const router = express.Router();
router.use(express.json());
router.post("/",(req,res)=>{
		 
     var body1=(req.body);
	 var ob=JSON.stringify(body1.payload);
        Object.keys(body1.referenceData).forEach(key =>{
     var toReplace =`{${key}}`;
     var regex = new RegExp(toReplace,"g");
	 ob = ob.replace(regex,body1.referenceData[key])
	 });
	 
     var result= JSON.parse(ob);
     res.json(result);
    });
module.exports=router;	



const express = require('express');

const regular_exp= require('xregexp');

var app = express();

app.use(express.json());

let input1;

app.post("/",(req,res)=>             
{
   input1=req.body;   
    replace(input1.payload.value);     
    res.send(input1.payload);
})

function replace(input1_value) {       
      
  for(let v1 in input1_value)
  {
    if(input1_value[v1].valueType=='string')       
    {
      for(let refvalue in input1.referenceData)
        {
        if(input1_value[v1].value.match(regular_exp(`${refvalue}`)))
              {
               input1_value[v1].value=input1_value[v1].value.replace(regular_exp(`{${refvalue}}`),input1.referenceData[refvalue]);
              }
        }
  
   }
  else
  {
       replace(input1_value[v1]["value"]);   
  }
}
}


var server=app.listen(4000,()=>{
    console.log("listening at port 4000");

    
})
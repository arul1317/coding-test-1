const express = require('express');
const XRegExp=require('xregexp');
var app = express();
app.use(express.json());
let input_data;

app.post("/api",(req,res)=>             
{
   input_data=req.body;   
    replace_function(input_data.payload.value);     
    res.send(input_data.payload);
})

function replace_function(input_data_value) {       
      
  for(let v1 in input_data_value)
  {
    if(input_data_value[v1].valueType=='string')       
    {
      for(let refvalue in input_data.referenceData)
        {
        if(input_data_value[v1].value.match(XRegExp(`${refvalue}`)))
              {
               input_data_value[v1].value=input_data_value[v1].value.replace(XRegExp(`{${refvalue}}`),input_data.referenceData[refvalue]);
              }
        }
  
   }
  else
  {
       replace_function(input_data_value[v1]["value"]);   
  }
}
}





var server=app.listen(5000,()=>{
    console.log("listening at port 5000");

    
})







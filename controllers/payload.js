var data;
var flag=0;

const iterateObject = (obj) =>{
    for(prop in obj){
        console.log("checking type of value in this object ")
        console.log(obj[prop]);
        if(obj[prop].valueType!="string"){
            console.log("need to be iterated");
            iterateObject(obj[prop].value);
        }
        else{
            console.log("its a string");
            console.log(obj[prop].value);
            var valuetobereplaced = obj[prop].value;
            for(key in data.referenceData){
                if(valuetobereplaced.indexOf(key) != -1){
                    flag =1;
                    var r = "{" + key + "}";
                    var newstr = valuetobereplaced.replace(r,data.referenceData[key])
                    console.log("its equal to prop" + key);
                    console.log("after replacing ")
                    console.log(newstr);
                }
            }
            if(flag==1){
             obj[prop].value = newstr;
             console.log(obj[prop].value);
            }
            
        }    
    }
}
module.exports.transformPayload = (req,res) =>{
    data = req.body;
    iterateObject(data.payload.value);
    res.json(data);    
}
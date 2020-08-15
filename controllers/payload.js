var data;
var flag=0;

const iterateObject = (obj) =>{
    for(let prop in obj){
        console.log("checking type of value in this object ")
        console.log(obj[prop]);
        if(obj[prop].valueType!="string"){
            console.log("need to be iterated");
            iterateObject(obj[prop].value);
        }
        else{
            console.log("its a string");
            console.log(obj[prop].value);
            let valuetobereplaced = obj[prop].value;
            for(const key in data.referenceData){
                if(valuetobereplaced.indexOf(key) != -1){
                    flag =1;
                    let r = "{" + key + "}";
                    valuetobereplaced = valuetobereplaced.replace(r,data.referenceData[key])
                    console.log("its equal to prop" + key);
                    console.log("after replacing ")
                    console.log(valuetobereplaced);
                }
            }
            if(flag==1){
                obj[prop].value = valuetobereplaced;
                console.log(obj[prop].value);
                flag=0;
            }
            
        }    
    }
}
module.exports.transformPayload = (req,res) =>{
    data = req.body;
    iterateObject(data.payload.value);
    res.json(data);    
}
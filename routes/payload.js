const express = require('express');

const router = express.Router();

router.post('/', (req, res) => { 
    const input = req.body;
    var strPayload = JSON.stringify(input.payload);
    const keys = Object.keys(input.referenceData);
    for(var i=0; i<keys.length; i++){
        var reg = new RegExp(`{${keys[i]}}`, "g");
       strPayload = strPayload.replace(reg, input.referenceData[keys[i]]);
    }
    var transPayload = JSON.parse(strPayload);
    
    res.json(transPayload);
});

module.exports = router;
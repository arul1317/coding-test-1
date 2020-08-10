const express = require('express');
const bodyParser = require('body-parser');

//import routes
const payloadRoute = require('./routes/payload')

//app
const app = express();

//middlewares
app.use(bodyParser.json());

//route middleware
app.use('/api/payload', payloadRoute);

//server listening at port 3000
app.listen(3000, () => console.log('server started'));
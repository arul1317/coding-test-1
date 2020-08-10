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

app.listen(3000, () => console.log('server started'));
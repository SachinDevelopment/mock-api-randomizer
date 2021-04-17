const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');
const port = 5000;
const app = express();
 
app.use(cors());
app.use('/', apiMocker('api'));
 
console.log(`Mock API Server is up and running at: http://localhost:${port}`);
app.listen(port);
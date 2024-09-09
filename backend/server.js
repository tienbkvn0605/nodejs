const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();

// Use the CORS middleware
app.use(cors({
    origin: '*' // Frontend URL
}));

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, access_token'
    )
  
    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
      res.send(200)
    } else {
      next()
    }
  }  
  app.use(allowCrossDomain)
// Setup server port
// const port = process.env.PORT || 5000;
const port = 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
	res.send("Welcome to my web server");
});

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')

// using as middleware   192.168.0.29
app.use('/api/v1/', employeeRoutes)

// listen for requests
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});

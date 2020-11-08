const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// create express app
const app = express();

app.use(cors(corsOptions));
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require todo routes
const todoRoutes = require('./src/routes/todo.routes')
// using as middleware
app.use('/api/v1/todo', todoRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

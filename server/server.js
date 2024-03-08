const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve everything from the build folder
app.use(express.static(path.join(__dirname, '../client/build')));

/* define route handler */
app.use('/api', apiRouter);

//catch all route
app.use('*', (req, res) => {
  return res.status(404).json('Page Not Found')
});

// global error handler
app.use('/', (err, req, res, next) => {
  const defaultErr = {
    log: 'Global error handler caught an error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, err };
  return res.status(errorObj.status).json(errorObj.message);
});

// Starts the server on port 3000
app.listen(3000, (err) => {
  if (err) console.log('Error setting up server');
  console.log('Choreify server running on 3000');
});

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const config = require('./config');
const routes = require('./routes');
const { pool, client } = require('./database/db');

const app = express();

// middleware to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "./client/build")))
// };
app.use(express.static(path.join(__dirname, './client/build')));

// connect to Mongo DB
// mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true })
//     .then(() => console.log(`Mongo DB Succesfully Connected`))
//     .catch(err => console.log(err));

// use routes
app.use(routes);

// check for "production" enviroment and set port
const PORT = process.env.PORT || 3001;

// // Connect with a connection pool.

// async function poolDemo() {
//   //const pool = new Pool(credentials);
//   const now = await pool.query('SELECT * from meal');
//   await pool.end();

//   return now;
// }

// // Connect with a client.

// async function clientDemo() {
//   //const client = new Client(credentials);
//   await client.connect();
//   const now = await client.query('SELECT * from cuisine');
//   await client.end();
//   return now;
// }

// // Use a self-calling function so we can use async / await.

// (async () => {
//   const poolResult = await poolDemo();
//   console.log('Time with pool: ' + poolResult.rows[0]['name']);

//   const clientResult = await clientDemo();
//   console.log('Time with client: ' + clientResult.rows[0]['name']);
// })();

// start server
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});

const db = require("../models/connectToDB");

const usersController = {};

usersController.getUsersInfo = async (req, res, next) => {
 const queryString = `SELECT * FROM userinfo`;
 const users = await db.query(queryString);
 console.log(users)
 const usersInfo = users.rows;
 res.locals.usersInfo = usersInfo;
 next();
}

usersController.postNewUser = async (req, res, next) => {
  const id = Math.floor(Math.random() * 1000);
  const values = [ `${id}`, 'dopey', 9090]
  const queryString = `INSERT INTO userinfo (id, username, password) VALUES ($1, $2, $3)`;
  const request = await db.query(queryString, values);
  console.log('request', request);
  const message = 'successfully created a user';
  res.locals.message = message;
  next();
};

module.exports = usersController;

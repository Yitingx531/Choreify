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
  const id = Math.floor(Math.random() * 1000000000);
  const values = [ `${id}`, 'cat@gmail.com', 'xyt123']
  const queryString = `INSERT INTO userinfo (id, email, password) VALUES ($1, $2, $3)`;
  const request = await db.query(queryString, values);
  const message = 'successfully created a user';
  res.locals.message = message;
  next();
};

module.exports = usersController;

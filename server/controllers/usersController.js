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
  try {
  const { id, username, password } = req.body;
  const values = [ id, username, password]
  const queryString = `INSERT INTO userinfo (id, username, password) VALUES ($1, $2, $3)`;
  await db.query(queryString, values);
  const message = 'successfully created a user';
  res.locals.message = message;
  next();
  } catch (error) {
    console.error('Error posting new user to the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = usersController;

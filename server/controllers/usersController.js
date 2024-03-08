const db = require("../models/connectToDB");

const usersController = {};

usersController.getUsersInfo = async(req, res, next) => {
 const queryString = `SELECT * FROM userinfo`;
 const users = await db.query(queryString);
 console.log('users', users.rows)
}
// usersController.postNewUser = (req, res, next) => {
//   console.log("req.body ", req.body);
//   const { id, username, password } = req.body;
//   const queryString = `INSERT INTO userinfo (id, username, password)
//   VALUES (3, 'Erika', 567)`;
  
//   db.query(queryString).then((data) => {
//     // console.log("data from query ", data);
//     if (data.rowCount >= 1) {
//       res.locals.payload = data.rows[0];
//       next();
//     } else {
//       next({ err: "Problem creating new user in database" });
//     }
//   });
// };

module.exports = usersController;

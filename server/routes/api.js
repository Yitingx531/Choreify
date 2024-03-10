// require in Express and controllers
const express = require('express');
// const choreController = require('../controllers/choreController');
// const groupController = require("../controllers/groupController");
const usersController = require("../controllers/usersController");
// const newGroupController = require('../controllers/newGroupController');

// create router
const router = express.Router();

// create a route for get chores that fetchs a list of all the chores that have been created
// router.get('/chores', choreController.getChores, (req, res) => {
//   console.log('back to api');
//   res.status(200).json(res.locals.choreList);
// });

// create a route for sending a new chore's data to the database
// router.post('/chores', choreController.createChore, (req, res) => {
//   res.status(200).json(res.locals.newChore);
// });

// create a rout for getting all group info
// router.get("/groups", groupController.getGroups, (req, res) => {
//   res.status(200).json(res.locals.groups);
// });

/ * create a rout for getting all users info * /
router.get("/users", usersController.getUsersInfo, (req, res) => {
  return res.status(200).json(res.locals.usersInfo);
});

/ * create a rout for posting new user info * /
router.post("/signup", usersController.postNewUser, (req, res) => {
  console.log('inside of postNewUser middleware')
  return res.status(200).json(res.locals.message);
});

// create a route for new group creations
// router.post('/createNewGroup', newGroupController.createNewGroup, (req, res) => {
//   res.status(200).json(res.locals.newGroup);
// });

module.exports = router;

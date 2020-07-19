const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("[ERROR: DB]: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("[INFO: DB]  User Added!"))
    .catch((err) => res.status(400).json("[ERROR: DB] " + err));
});

module.exports = router;

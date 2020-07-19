const router = require("express").Router();
const Experience = require("../models/experience.model");

router.route("/").get((req, res) => {
  Experience.find()
    .then((expericence) => res.json(expericence))
    .catch((err) => res.status(400).json("[ERROR: DB] " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const jobTitle = req.body.jobTitle;
  const company = req.body.company;
  const additionalInfo = req.body.additionalInfo;
  const start = req.body.start;
  const end = req.body.end;
  const location = req.body.location;
  const description = req.body.description;
  const tags = req.body.tags;

  const newExperience = new Experience({
    username,
    jobTitle,
    company,
    additionalInfo,
    start,
    end,
    location,
    description,
    tags,
  });

  newExperience
    .save()
    .then(() => res.json("[INFO: DB] New Experience Added!"))
    .catch((err) => res.status(400).json("[ERROR: DB] " + err));
});

router.route("/:id").get((req, res) => {
  Experience.findById(req.params.id)
    .then((expericence) => res.json(expericence))
    .catch((err) => res.status(400).json("[ERROR: DB] " + err));
});

router.route("/:id").delete((req, res) => {
  Experience.findByIdAndDelete(req.params.id)
    .then(() => res.json("[INFO: DB] Experience Deleted"))
    .catch((err) => res.status(400).json("[ERROR: DB] " + err));
});

router.route("/update/:id").post((req, res) => {
  Experience.findById(req.params.id)
    .then((expericence) => {
      expericence.username = req.body.username;
      expericence.jobTitle = req.body.jobTitle;
      expericence.company = req.body.company;
      expericence.additionalInfo = req.body.additionalInfo;
      expericence.start = req.body.start;
      expericence.end = req.body.end;
      expericence.location = req.body.location;
      expericence.description = req.body.description;
      expericence.tags = req.body.tags;

      expericence
        .save()
        .then(() => res.json("[INFO: DB] Experience Updated"))
        .catch((err) => res.status(400).json("[ERROR: DB] " + err));
    })
    .catch((err) => res.status(400).json("[ERROR: DB] " + err));
});

router.route("/user/:user").get((req, res) => {
    Experience.find({username: req.params.user})
      .then((expericence) => res.json(expericence))
      .catch((err) => res.status(400).json("[ERROR: DB] " + err));
  });

module.exports = router;

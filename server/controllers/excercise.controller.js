const Excercise = require("../models/excercise.model");

const createNewExcercise = (req, res) => {
  Excercise.create(req.body)
    .then((newExcercise) => {
      res.json({ newExcercise });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getAllExcercise = (req, res) => {
  Excercise.find()
    .then((allExcercise) => {
      res.json(allExcercise);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getOneExcercise = (req, res) => {
  Excercise.findOne({ _id: req.params.id })
    .then((queriedExcercise) => {
      res.json(queriedExcercise);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const updateExcercise = (req, res) => {
  Excercise.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedExcercise) => {
      res.json({ updatedExcercise });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const deleteExistingExcercise = (req, res) => {
  Excercise.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

module.exports = {
  createNewExcercise,
  getOneExcercise,
  getAllExcercise,
  updateExcercise,
  deleteExistingExcercise,
};
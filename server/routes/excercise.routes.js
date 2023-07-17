const excerciseController = require("../controllers/excercise.controller");

module.exports = (app) => {
  app.post("/api/excercise", excerciseController.createNewExcercise);
  app.get("/api/excercise", excerciseController.getAllExcercise);
  app.get("/api/excercise/:id", excerciseController.getOneExcercise);
  app.put("/api/excercise/:id", excerciseController.updateExcercise);
  app.delete("/api/excercise/:id", excerciseController.deleteExistingExcercise);
};
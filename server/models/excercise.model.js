const mongoose = require("mongoose");

const ExcerciseSchema = {
  title: {
    type: String,
    required: [true, "title is required"],
    minLength: [3, "Title must be at least 3 characters"],
  },
  reps: {
    type: Number,
    required: [true, "Number of reps is required"],
    min: [1, "Number of reps must be at 1"],
  },
  sets: {
    type: Number,
    required: [true, "Number of sets is required"],
    min: [1, "Number of sets must be at 1"],
  }
};

module.exports = mongoose.model("excercise", ExcerciseSchema);
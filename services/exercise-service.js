const repository = require("../db/repositories/exercise-respository.cjs");

const getAllExercises = async () => {
  try {
    const exercises = await repository.getAllExercises();
    return exercises;
  } catch (error) {
    throw error;
  }
};

const createExercise = async (newExercise) => {
  console.log(newExercise, "sercice");
  try {
    const excercise = await repository.createExercise(newExercise);
    return excercise;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllExercises,
  createExercise,
};

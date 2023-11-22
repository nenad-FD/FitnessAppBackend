const repository = require("../db/repositories/exercise-respository.cjs");

const getAllExercises = async () => {
  try {
    const exercises = await repository.getAllExercises();
    return exercises;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllExercises,
};

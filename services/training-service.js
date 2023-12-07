const repository = require("../db/repositories/training-repository.cjs");

const createTraining = async (newTraining) => {
  try {
    const excercise = await repository.createTraining(newTraining);
    return excercise;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTraining,
};

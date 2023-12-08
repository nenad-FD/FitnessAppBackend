const repository = require("../db/repositories/training-repository.cjs");

const createTraining = async (newTraining) => {
  try {
    const excercise = await repository.createTraining(newTraining);
    return excercise;
  } catch (error) {
    throw error;
  }
};

const getTrainingById = async (id) => {
  try {
    const training = await repository.getTrainingById(id);
    if (!training) {
      throw new Error(`Training id:${id} does not exist!`);
    }
    return training;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTraining,
  getTrainingById,
};

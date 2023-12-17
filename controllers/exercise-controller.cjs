const service = require("../services/exercise-service");

const getAll = async (req, res) => {
  try {
    const exercises = await service.getAllExercises();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json(error);
  }
};

const create = async (req, res) => {
  try {
    const exercises = await service.createExercise(req.body);
    res.status(200).json(exercises);
  } catch (err) {
    //Unapredi error handling
    res.status(400).json(err);
  }
};

module.exports = {
  getAll,
  create,
};

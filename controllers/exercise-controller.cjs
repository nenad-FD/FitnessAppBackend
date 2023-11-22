const service = require("../services/exercise-service");

const getAll = async (req, res) => {
  try {
    const exercises = await service.getAllExercises();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAll,
};

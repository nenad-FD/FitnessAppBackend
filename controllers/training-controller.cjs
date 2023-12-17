const service = require("../services/training-service");

const create = async (req, res) => {
  try {
    const exercises = await service.createTraining(req.body);
    res.status(200).json(exercises);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const training = await service.getTrainingById(id);
    res.status(200).json(training);
  } catch (err) {
    res.status(404).json(err);
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const training = await service.deleteTrainingById(id);
    res.status(200).json(training);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  create,
  getById,
  deleteById,
};

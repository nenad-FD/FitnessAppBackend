const service = require("../services/training-service");

const create = async (req, res) => {
  try {
    const exercises = await service.createTraining(req.body);
    res.status(200).json(exercises);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  create,
};

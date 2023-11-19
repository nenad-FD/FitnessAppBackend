const service = require("../services/user-service");

const getAll = async (req, res) => {
  try {
    const users = await service.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    //Preporuka je da u kontroleru ne throwujemo error
    res.status(500).json(error);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await service.getUserById(id);
    res.status(200).json(user);
  } catch (err) {
    //Ovde se moze desiti da user posalje nepostojeci id pa da bude 404, a ako baza pravi problem npr
    res.status(404).json(err);
  }
};

const create = async (req, res) => {
  try {
    const user = await service.createUser(req.body);
    res.status(200).json(user);
  } catch (err) {
    //Unapredi error handling
    res.status(400).json(err);
  }
};

const update = async (req, res) => {
  try {
    const updatedUser = await service.updateUser(req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(404).json(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};

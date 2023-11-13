const repository = require("../db/repositories/user-repository");

const getAll = async (req, res) => {
  try {
    const users = await repository.getAll();
    res.status(200).json(users);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAll,
};

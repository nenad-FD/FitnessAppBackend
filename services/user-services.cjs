const repository = require("../db/repositories/user-repository");

//Ovo jos ne koristim, za sada dirktno gadjam bazu u index.js fajlu
const getAllUsers = async (req, res) => {
  try {
    const users = await repository.getAll();
    res.status(200).json(users);
  } catch (error) {
    throw error;
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await repository.getById(id);
    if (!user) {
      res.status(404).send({ message: "User with that id does not exist!" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
};

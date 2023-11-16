const repository = require("../db/repositories/user-repository.cjs");

const getAllUsers = async () => {
  try {
    const users = await repository.getAllUsers();
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await repository.getUserById(id);
    if (!user) {
      throw new Error(`User id:${id} does not exist!`);
    }
    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = async (newUser) => {
  try {
    const user = await repository.createUser(newUser);
    return user;
  } catch (error) {
    console.log("service error");
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};

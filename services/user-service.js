const repository = require("../db/repositories/user-repository.cjs");

const getAllUsers = async () => {
  try {
    const users = await repository.getAllUsers();
    console.log(users, "USER IZ SERVISA");
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

module.exports = {
  getAllUsers,
  getUserById,
};

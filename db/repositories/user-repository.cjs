const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id: id } });
};

const createUser = async (user) => {
  return await prisma.user.create({ data: user });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUsers = async () => {
  return await prisma.user.findMany();
};

const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id: id },
    include: {
      trainings: {
        include: {
          exercises: true,
        },
      },
    },
  });
};

const createUser = async (user) => {
  return await prisma.user.create({ data: user });
};

const updateUser = async (user) => {
  const { id, ...updateData } = user;

  return await prisma.user.update({
    where: {
      id: id,
    },
    data: updateData,
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
};

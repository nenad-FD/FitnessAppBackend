const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllExercises = async () => {
  return await prisma.excercise.findMany();
};

module.exports = {
  getAllExercises,
};

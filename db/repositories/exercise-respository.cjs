const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllExercises = async () => {
  return await prisma.excercise.findMany();
};

const createExercise = async (exercise) => {
  try {
    return await prisma.excercise.create({ data: exercise });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllExercises,
  createExercise,
};

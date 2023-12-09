const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTraining = async (training) => {
  const exercises = training.exercises.map((id) => {
    return {
      id,
    };
  });
  const newTraining = {
    ...training,
    exercises: { connect: exercises },
  };
  try {
    return await prisma.training.create({ data: newTraining });
  } catch (err) {
    throw err;
  }
};

const getTrainingById = async (id) => {
  return await prisma.training.findUnique({
    where: { id: id },
    include: {
      exercises: true,
    },
  });
};

module.exports = {
  createTraining,
  getTrainingById,
};

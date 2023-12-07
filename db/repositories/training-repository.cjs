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
    console.log(err, "error u repos");
    throw err;
  }
};

module.exports = {
  createTraining,
};

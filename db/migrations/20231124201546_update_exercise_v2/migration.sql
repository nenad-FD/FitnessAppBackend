/*
  Warnings:

  - You are about to drop the `DefaultExerciseDescription` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ExerciseDefaultDescriptions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `defaultDescription` to the `Excercise` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `_ExerciseDefaultDescriptions` DROP FOREIGN KEY `_ExerciseDefaultDescriptions_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ExerciseDefaultDescriptions` DROP FOREIGN KEY `_ExerciseDefaultDescriptions_B_fkey`;

-- AlterTable
ALTER TABLE `Excercise` ADD COLUMN `defaultDescription` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `DefaultExerciseDescription`;

-- DropTable
DROP TABLE `_ExerciseDefaultDescriptions`;

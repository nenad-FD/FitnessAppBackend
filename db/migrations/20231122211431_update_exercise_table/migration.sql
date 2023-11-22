/*
  Warnings:

  - Added the required column `videoURL` to the `Excercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Excercise` ADD COLUMN `videoURL` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `DefaultExerciseDescription` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ExerciseDefaultDescriptions` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ExerciseDefaultDescriptions_AB_unique`(`A`, `B`),
    INDEX `_ExerciseDefaultDescriptions_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ExerciseDefaultDescriptions` ADD CONSTRAINT `_ExerciseDefaultDescriptions_A_fkey` FOREIGN KEY (`A`) REFERENCES `DefaultExerciseDescription`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExerciseDefaultDescriptions` ADD CONSTRAINT `_ExerciseDefaultDescriptions_B_fkey` FOREIGN KEY (`B`) REFERENCES `Excercise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

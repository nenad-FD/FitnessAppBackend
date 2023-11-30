/*
  Warnings:

  - You are about to drop the `_ExcerciseToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ExcerciseToUser` DROP FOREIGN KEY `_ExcerciseToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ExcerciseToUser` DROP FOREIGN KEY `_ExcerciseToUser_B_fkey`;

-- DropTable
DROP TABLE `_ExcerciseToUser`;

-- CreateTable
CREATE TABLE `Training` (
    `id` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `trainingSummary` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ExcerciseToTraining` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ExcerciseToTraining_AB_unique`(`A`, `B`),
    INDEX `_ExcerciseToTraining_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Training` ADD CONSTRAINT `Training_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExcerciseToTraining` ADD CONSTRAINT `_ExcerciseToTraining_A_fkey` FOREIGN KEY (`A`) REFERENCES `Excercise`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ExcerciseToTraining` ADD CONSTRAINT `_ExcerciseToTraining_B_fkey` FOREIGN KEY (`B`) REFERENCES `Training`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

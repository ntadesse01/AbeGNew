/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `EmployeeInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `orderinfo` MODIFY `additionalRequest` VARCHAR(191) NULL,
    MODIFY `notesForInternalUse` VARCHAR(191) NULL,
    MODIFY `notesForCustomer` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `EmployeeInfo_phone_key` ON `EmployeeInfo`(`phone`);

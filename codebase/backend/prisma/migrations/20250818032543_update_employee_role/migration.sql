/*
  Warnings:

  - A unique constraint covering the columns `[employeeId,companyRoleId]` on the table `EmployeeRole` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `employeerole` DROP FOREIGN KEY `EmployeeRole_companyRoleId_fkey`;

-- DropForeignKey
ALTER TABLE `employeerole` DROP FOREIGN KEY `EmployeeRole_employeeId_fkey`;

-- DropIndex
DROP INDEX `EmployeeRole_companyRoleId_key` ON `employeerole`;

-- DropIndex
DROP INDEX `EmployeeRole_employeeId_key` ON `employeerole`;

-- CreateIndex
CREATE UNIQUE INDEX `EmployeeRole_employeeId_companyRoleId_key` ON `EmployeeRole`(`employeeId`, `companyRoleId`);

-- AddForeignKey
ALTER TABLE `CustomerInfo` ADD CONSTRAINT `CustomerInfo_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `CustomerIdentifier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CustomerVehicleInfo` ADD CONSTRAINT `CustomerVehicleInfo_customerId_fkey` FOREIGN KEY (`customerId`) REFERENCES `CustomerIdentifier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

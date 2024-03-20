/*
  Warnings:

  - Made the column `completedAt` on table `repository` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "repository" ALTER COLUMN "completedAt" SET NOT NULL;

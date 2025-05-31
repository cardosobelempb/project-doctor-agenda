/*
  Warnings:

  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ROLES" AS ENUM ('ADMIN', 'CLIENT', 'SUPPLIER');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" "ROLES" NOT NULL DEFAULT 'CLIENT';

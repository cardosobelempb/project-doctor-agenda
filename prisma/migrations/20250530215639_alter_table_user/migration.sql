/*
  Warnings:

  - You are about to drop the column `provider_account_id` on the `authenticator` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_name]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider_accountId` to the `authenticator` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "DonarStatus" AS ENUM ('PENDING', 'PAID', 'FAILDE');

-- AlterTable
ALTER TABLE "account" ADD COLUMN     "deleted_at" TIMESTAMP(6),
ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "authenticator" DROP COLUMN "provider_account_id",
ADD COLUMN     "provider_accountId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "session" ADD COLUMN     "deleted_at" TIMESTAMP(6),
ALTER COLUMN "user_id" DROP NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "user_name" TEXT;

-- CreateIndex
CREATE INDEX "account_deleted_at_idx" ON "account"("deleted_at");

-- CreateIndex
CREATE INDEX "session_deleted_at_idx" ON "session"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "users_user_name_key" ON "users"("user_name");

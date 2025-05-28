/*
  Warnings:

  - You are about to drop the column `user_id` on the `clinics` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "clinics" DROP CONSTRAINT "clinics_user_id_fkey";

-- AlterTable
ALTER TABLE "clinics" DROP COLUMN "user_id";

-- CreateTable
CREATE TABLE "user_to_clinic" (
    "user_id" UUID NOT NULL,
    "clinic_id" UUID NOT NULL,

    CONSTRAINT "user_to_clinic_pkey" PRIMARY KEY ("user_id","clinic_id")
);

-- AddForeignKey
ALTER TABLE "user_to_clinic" ADD CONSTRAINT "user_to_clinic_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_to_clinic" ADD CONSTRAINT "user_to_clinic_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "clinics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

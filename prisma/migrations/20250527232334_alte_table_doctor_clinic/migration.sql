/*
  Warnings:

  - The primary key for the `doctor_clinic` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clinicId` on the `doctor_clinic` table. All the data in the column will be lost.
  - You are about to drop the column `doctorId` on the `doctor_clinic` table. All the data in the column will be lost.
  - Added the required column `clinic_id` to the `doctor_clinic` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doctor_id` to the `doctor_clinic` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "doctor_clinic" DROP CONSTRAINT "doctor_clinic_clinicId_fkey";

-- DropForeignKey
ALTER TABLE "doctor_clinic" DROP CONSTRAINT "doctor_clinic_doctorId_fkey";

-- AlterTable
ALTER TABLE "doctor_clinic" DROP CONSTRAINT "doctor_clinic_pkey",
DROP COLUMN "clinicId",
DROP COLUMN "doctorId",
ADD COLUMN     "clinic_id" UUID NOT NULL,
ADD COLUMN     "doctor_id" UUID NOT NULL,
ADD CONSTRAINT "doctor_clinic_pkey" PRIMARY KEY ("doctor_id", "clinic_id");

-- AddForeignKey
ALTER TABLE "doctor_clinic" ADD CONSTRAINT "doctor_clinic_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_clinic" ADD CONSTRAINT "doctor_clinic_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "clinics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `doctor_clinic` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "doctor_clinic" DROP CONSTRAINT "doctor_clinic_clinic_id_fkey";

-- DropForeignKey
ALTER TABLE "doctor_clinic" DROP CONSTRAINT "doctor_clinic_doctor_id_fkey";

-- DropTable
DROP TABLE "doctor_clinic";

-- CreateTable
CREATE TABLE "doctor_to_clinic" (
    "doctor_id" UUID NOT NULL,
    "clinic_id" UUID NOT NULL,

    CONSTRAINT "doctor_to_clinic_pkey" PRIMARY KEY ("doctor_id","clinic_id")
);

-- AddForeignKey
ALTER TABLE "doctor_to_clinic" ADD CONSTRAINT "doctor_to_clinic_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_to_clinic" ADD CONSTRAINT "doctor_to_clinic_clinic_id_fkey" FOREIGN KEY ("clinic_id") REFERENCES "clinics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

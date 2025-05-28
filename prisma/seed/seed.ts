import { PrismaClient } from '../../src/generated/prisma';

const prisma = new PrismaClient()

async function main() {
  console.log("SEED")
  await prisma.user.deleteMany();
  await prisma.doctor.deleteMany();
  await prisma.clinic.deleteMany();
  await prisma.patient.deleteMany();
  await prisma.appointment.deleteMany();
  await prisma.doctorToClinic.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: 'Jane Doe',
    },
  })

  const clinic = await prisma.clinic.create({
    data: {
      name: 'Central Clinic',
      users: {
        create: {
          userId: user.id
        }
      },
    },
  })

  const doctor = await prisma.doctor.create({
    data: {
      name: 'Dr. Alice',
      specialty: 'Cardiology',
      availableFromTime: new Date('1970-01-01T08:00:00Z'),
      availableToTime: new Date('1970-01-01T17:00:00Z'),
      userId: user.id,
      clinics: {
        create: {
          clinicId: clinic.id,
        },
      },
    },
  })

  const patient = await prisma.patient.create({
    data: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '+5511999999999',
      gender: 'MALE',
      userId: user.id,
      doctorId: doctor.id,
      clinicId: clinic.id,
    },
  })

  await prisma.appointment.create({
    data: {
      status: 'CONFIRMED',
      userId: user.id,
      doctorId: doctor.id,
      clinicId: clinic.id,
      patientId: patient.id,
    },
  })

  console.log('Seed completo!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

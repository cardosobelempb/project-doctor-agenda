
# 🩺 Doutor Agenda

- Doutor Agenda é uma aplicação web desenvolvida com Next.js para gerenciamento de clínicas, médicos, pacientes e agendamentos. A aplicação permite múltiplas clínicas por usuário, além de gerenciamento completo de consultas médicas com suporte a planos de assinatura.

# 🚀 Instalação
- Clone o repositório e instale as dependências:

```
npx create-next-app@15.3.2 project-doutor-agenda
cd project-doutor-agenda
npm i react-icons
npm i zod
npm i clsx
npx shadcn@latest init

npx shadcn@latest add card
npx shadcn@latest add tabs
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add label


npx shadcn@latest add form
npm install react-hook-form

# Dependências de desenvolvimento
npm install prettier@3.5.3 prettier-plugin-tailwindcss@0.6.11 -D
npm install eslint-plugin-simple-import-sort@12.1.1 -D

```

# ✅ Requisitos Funcionais (RF)

- Autenticação

- Usuários podem estar associados a várias clínicas.

- Clínicas

- CRUD de médicos.

- Cada médico tem disponibilidade e preço da consulta.

- CRUD de pacientes.

- Pode agendar consultas entre médicos e pacientes.

- Planos de assinatura disponíveis.

# database

- User n-n Clinic
- User 1-n Appointment
- Clinic n-n User
- Clinic 1-n Patient
- Clinic 1-n Doctor
- Clinic 1-n Appointment
- Doctor 1-1 Clinic
- Doctor 1-n Appointment
- Patient 1-n Clinic
- Patient 1-n Appointment

# 🧩 Diagrama de Classes (Simplificado)

```
+------------------+          +-----------------+         +------------------+
|      User        |<>--------|     Doctor      |<>-------|  DoctorClinic    |
+------------------+          +-----------------+         +------------------+
| id: UUID         |          | id: UUID        |         | doctorId: UUID   |
| name: String     |          | name: String    |         | clinicId: UUID   |
| createdAt        |          | specialty       |         | createdAt        |
| updatedAt        |          | availableFrom.. |         | updatedAt        |
| deletedAt        |          | price: Decimal  |         | deletedAt        |
+------------------+          | userId: UUID    |         +------------------+
                              +-----------------+
                                      |
                                      |
                                      | 1
                                      |
                                     /_\
                                      N
                                 Appointments

+------------------+          +------------------+         +------------------+
|     Patient      |<>--------|   Appointment    |<>-------|     Clinic       |
+------------------+          +------------------+         +------------------+
| id: UUID         |          | id: UUID         |         | id: UUID         |
| name: String     |          | status: String   |         | name: String     |
| email            |          | createdAt        |         | createdAt        |
| phone            |          | updatedAt        |         | updatedAt        |
| gender           |          | deletedAt        |         | deletedAt        |
| doctorId: UUID   |          | doctorId: UUID   |         +------------------+
| clinicId: UUID   |          | patientId: UUID  |
| userId: UUID     |          | clinicId: UUID   |
| createdAt        |          | userId: UUID     |
+------------------+          +------------------+

```

# Prisma

```
npm i prisma -D
npm i @prisma/client
npx prisma init
npx prisma migrate dev

```

# Auth

```
npm install @prisma/client @auth/prisma-adapter
npm i bcryptjs

```

# Certificado letra A

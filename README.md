
# 🩺 Doutor Agenda

- Doutor Agenda é uma aplicação web desenvolvida com Next.js para gerenciamento de clínicas, médicos, pacientes e agendamentos. A aplicação permite múltiplas clínicas por usuário, além de gerenciamento completo de consultas médicas com suporte a planos de assinatura.

# 🚀 Instalação
- Clone o repositório e instale as dependências:

```
npx create-next-app@15.3.2 project-doutor-agenda
cd project-doutor-agenda

# Dependências de desenvolvimento
npm i react-icons
npm i clsx
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
+----------------+          +----------------+
|     User       |<-------->|    Clinic      |
+----------------+          +----------------+
| id             |          | id             |
| name           |          | name           |
| email          |          | plan_type      |
+----------------+          +----------------+
        |                           |
        |                           |
        |                           v
        |                +----------------+
        |                |    Doctor      |
        |                +----------------+
        |                | id             |
        |                | name           |
        |                | availability   |
        |                | price          |
        |                +----------------+
        |                           |
        |                           v
        |                +----------------+
        |                |  Appointment   |
        |                +----------------+
        |                | id             |
        |                | date_time      |
        |                | doctor_id      |
        |                | patient_id     |
        |                +----------------+
        |
        |                +----------------+
        |                |   Patient      |
        |                +----------------+
                         | id             |
                         | name           |
                         | clinic_id      |
                         +----------------+

```

# Prisma

```
npm i prisma -D
npm i @prisma/client
npx prisma init
npx prisma migrate dev

```
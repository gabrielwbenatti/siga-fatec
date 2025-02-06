import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const salt = await bcrypt.genSalt(8);
  const pass = await bcrypt.hash("123456", salt);

  await prisma.courses
    .create({
      data: {
        name: "Análise e Desenvolvimento de Sistemas",
        abbreviation: "ADS",
      },
    })
    .then(async (adsCourse) => {
      await prisma.disciplines.createMany({
        data: [
          //semester 1
          {
            course_id: adsCourse.id,
            name: "Administração Geral",
            abbreviation: "AAG001",
          },
          {
            course_id: adsCourse.id,
            name: "Arquitetura e Organização de Computadores",
            abbreviation: "IAC001",
          },
          {
            course_id: adsCourse.id,
            name: "Algoritmos e Lógica de Programação",
            abbreviation: "IAL002",
          },
          {
            course_id: adsCourse.id,
            name: "Laboratório de Hardware",
            abbreviation: "IHW100",
          },
          { course_id: adsCourse.id, name: "Inglês VI", abbreviation: "IVI" },
          {
            course_id: adsCourse.id,
            name: "Programação em Microinformática",
            abbreviation: "ILM001",
          },
          {
            course_id: adsCourse.id,
            name: "Inglês I",
            abbreviation: "LIN100",
          },
          {
            course_id: adsCourse.id,
            name: "Matemática Discreta",
            abbreviation: "MMD001",
          },

          //semester 2
          {
            course_id: adsCourse.id,
            name: "Contabilidade",
            abbreviation: "CCG001",
          },
          {
            course_id: adsCourse.id,
            name: "Engenharia de Software I",
            abbreviation: "IES100",
          },
          {
            course_id: adsCourse.id,
            name: "Linguagem de Programação",
            abbreviation: "ILP010",
          },
          {
            course_id: adsCourse.id,
            name: "Sistemas de Informação",
            abbreviation: "ISI002",
          },
          {
            course_id: adsCourse.id,
            name: "Inglês II",
            abbreviation: "LIN200",
          },
          {
            course_id: adsCourse.id,
            name: "Comunicação e Expressão",
            abbreviation: "LPO001",
          },
          {
            course_id: adsCourse.id,
            name: "Cálculo",
            abbreviation: "MCA002",
          },

          //semester 3
          {
            course_id: adsCourse.id,
            name: "Banco de Dados",
            abbreviation: "IBD002",
          },
          {
            course_id: adsCourse.id,
            name: "Estruturas de Dados",
            abbreviation: "IED001",
          },
          {
            course_id: adsCourse.id,
            name: "Engenharia de Software II",
            abbreviation: "IES200",
          },
          {
            course_id: adsCourse.id,
            name: "Interação Humano Computador",
            abbreviation: "IHC001",
          },
          {
            course_id: adsCourse.id,
            name: "Redes de Computadores",
            abbreviation: "IRC008",
          },
          {
            course_id: adsCourse.id,
            name: "Sistemas Operacionais I",
            abbreviation: "ISO100",
          },
          {
            course_id: adsCourse.id,
            name: "Inglês III",
            abbreviation: "LIN300",
          },
        ],
      });
    })
    .then(async () => {
      await prisma.users
        .create({
          data: {
            email: "rita.catini@fatec.sp.gov.br",
            password: pass,
            username: "rita.catini",
          },
        })
        .then(async (usr) => {
          await prisma.teachers.create({
            data: {
              first_name: "Rita",
              last_name: "Catini",
              user_id: usr.id,
            },
          });
        });

      await prisma.users
        .create({
          data: {
            email: "paulo.cesar@fatec.sp.gov.br",
            password: pass,
            username: "paulo.cesar",
          },
        })
        .then(async (usr) => {
          await prisma.teachers.create({
            data: {
              first_name: "Paulo",
              last_name: "Cesar",
              user_id: usr.id,
            },
          });
        });
    })
    .then(async () => {
      await prisma.users
        .create({
          data: {
            email: "gabriel.benatti@fatec.sp.gov.br",
            username: "gabriel.benatti",
            password: pass,
          },
        })
        .then(async (usr) => {
          await prisma.students.create({
            data: {
              first_name: "Gabriel",
              last_name: "Benatti",
              user_id: usr.id,
            },
          });
        });

      await prisma.users
        .create({
          data: {
            email: "matheus.figueiredo@fatec.sp.gov.br",
            username: "matheus.figueiredo",
            password: pass,
          },
        })
        .then(async (usr) => {
          await prisma.students.create({
            data: {
              first_name: "Matheus",
              last_name: "Figueiredo",
              user_id: usr.id,
            },
          });
        });

      await prisma.users
        .create({
          data: {
            email: "olavo.kawano@fatec.sp.gov.br",
            username: "olavo.kawano",
            password: pass,
          },
        })
        .then(async (usr) => {
          await prisma.students.create({
            data: { first_name: "Olavo", last_name: "Kawano", user_id: usr.id },
          });
        });
    });

  await prisma.courses
    .createMany({
      data: [
        { name: "Fabricação Mecânica", abbreviation: "FM" },
        { name: "Mecânica Industrial", abbreviation: "MI" },
      ],
    })
    .then((result) => {
      if (result) console.log("[OK] COURSES");
    });
}

main();

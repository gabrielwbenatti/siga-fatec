import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { seedBancoDados } from "./seeds/bancodados";
import { seedSistemasOperacionais } from "./seeds/sistemasOperacionais";
import { seedInglesV } from "./seeds/inglesV";
import { seedStudents } from "./seeds/students";

const prisma = new PrismaClient();

async function main() {
  const salt = await bcrypt.genSalt(8);
  const pass = await bcrypt.hash("wEz2p16U3G2pyq", salt);

  await prisma.courses
    .create({
      data: {
        name: "Análise e Desenvolvimento de Sistemas",
        abbreviation: "ADS",
      },
    })
    .then(async (adsCourse) => {
      const courseId = adsCourse.id;

      const teacherDemo = await prisma.teachers.create({
        data: {
          first_name: "Professor",
          last_name: "Ciclano de Tal",
          user: {
            create: {
              email: "professor.fulanodetal@fatec.sp.gov.br",
              username: "professor.fulanodetal",
              password: pass,
            },
          },
        },
      });

      const students = await seedStudents(prisma, courseId);

      await seedBancoDados(prisma, courseId, teacherDemo.id, students);
      await seedSistemasOperacionais(
        prisma,
        courseId,
        teacherDemo.id,
        students
      );
      await seedInglesV(prisma, courseId, teacherDemo.id, students);
    });
}

main();

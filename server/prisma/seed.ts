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
      const courseId = adsCourse.id;

      const pc = await prisma.teachers.create({
        data: {
          first_name: "Paulo",
          last_name: "Cesar",
          user: {
            create: {
              email: "paulo.cesar@fatec.sp.gov.br",
              username: "paulo.cesar",
              password: pass,
            },
          },
        },
      });

      await prisma.disciplines.create({
        data: {
          abbreviation: "pweb",
          name: "Programação Web",
          course_id: courseId,
          classes: {
            create: {
              teacher_id: pc.id,
              semester: 1,
              year: 2025,
              class_schedules: {
                createMany: {
                  data: [
                    {
                      day_of_week: 6,
                      start_time: "19:00",
                      end_time: "19:50",
                    },
                    {
                      day_of_week: 6,
                      start_time: "19:50",
                      end_time: "20:40",
                    },
                    {
                      day_of_week: 6,
                      start_time: "20:50",
                      end_time: "21:40",
                    },
                    {
                      day_of_week: 6,
                      start_time: "21:40",
                      end_time: "22:30",
                    },
                  ],
                },
              },
            },
          },
        },
      });

      await prisma.disciplines.create({
        data: {
          abbreviation: "engsoft",
          name: "Engenharia de Software",
          course_id: courseId,
          classes: {
            create: {
              teacher_id: pc.id,
              semester: 1,
              year: 2025,
              class_schedules: {
                createMany: {
                  data: [
                    {
                      day_of_week: 2,
                      start_time: "19:00",
                      end_time: "19:50",
                    },
                    {
                      day_of_week: 2,
                      start_time: "19:50",
                      end_time: "20:40",
                    },
                    {
                      day_of_week: 2,
                      start_time: "20:50",
                      end_time: "21:40",
                    },
                    {
                      day_of_week: 2,
                      start_time: "21:40",
                      end_time: "22:30",
                    },
                  ],
                },
              },
            },
          },
        },
      });
    });
}

main();

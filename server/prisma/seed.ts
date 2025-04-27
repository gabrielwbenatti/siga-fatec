import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

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

      const fulanoDeTal = await prisma.teachers.create({
        data: {
          first_name: "Professor",
          last_name: "Fulano de Tal",
          user: {
            create: {
              email: "professor.fulanodetal@fatec.sp.gov.br",
              username: "professor.fulanodetal",
              password: pass,
            },
          },
        },
      });

      const pweb = await prisma.disciplines.create({
        data: {
          abbreviation: "PWEB",
          name: "Programação Web",
          course_id: courseId,
          classes: {
            create: {
              teacher_id: fulanoDeTal.id,
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
                  ],
                },
              },
            },
          },
        },
      });

      const esoft = await prisma.disciplines.create({
        data: {
          abbreviation: "engsoft",
          name: "Engenharia de Software",
          course_id: courseId,
          classes: {
            create: {
              teacher_id: fulanoDeTal.id,
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

      await prisma.students.create({
        data: {
          first_name: "Aluno",
          last_name: "Silva",
          user: {
            create: {
              email: "alunosilva@fatec.sp.gov.br",
              password: pass,
              username: "alunosilva",
            },
          },
          class_students: {
            createMany: {
              data: [{ class_id: pweb.id }, { class_id: esoft.id }],
            },
          },
        },
      });
      await prisma.students.create({
        data: {
          first_name: "Aluno",
          last_name: "Pires",
          user: {
            create: {
              email: "alunopires@fatec.sp.gov.br",
              password: pass,
              username: "alunopires",
            },
          },
          class_students: {
            createMany: {
              data: [{ class_id: pweb.id }, { class_id: esoft.id }],
            },
          },
        },
      });
      await prisma.students.create({
        data: {
          first_name: "Aluno",
          last_name: "Guedes",
          user: {
            create: {
              email: "alunogudedes@fatec.sp.gov.br",
              password: pass,
              username: "alunogudedes",
            },
          },
          class_students: {
            createMany: {
              data: [{ class_id: pweb.id }, { class_id: esoft.id }],
            },
          },
        },
      });

      await prisma.classes.create({
        data: {
          teacher_id: fulanoDeTal.id,
          discipline_id: pweb.id,
          semester: 1,
          year: 2024,
          finished: true,
          class_plans: {
            createMany: {
              data: [
                { title: "Aula 1", description: "Aula 1 teste" },
                { title: "Aula 2", description: "Aula 2 teste" },
                { title: "Aula 3", description: "Aula 3 teste" },
                { title: "Aula 4", description: "Aula 4 teste" },
              ],
            },
          },
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
              ],
            },
          },
        },
      });
      await prisma.classes.create({
        data: {
          teacher_id: fulanoDeTal.id,
          discipline_id: pweb.id,
          semester: 2,
          year: 2024,
          finished: true,
          class_plans: {
            createMany: {
              data: [
                { title: "Aula 1", description: "Aula 1 teste" },
                { title: "Aula 2", description: "Aula 2 teste" },
                { title: "Aula 3", description: "Aula 3 teste" },
                { title: "Aula 4", description: "Aula 4 teste" },
              ],
            },
          },
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
              ],
            },
          },
        },
      });
      await prisma.classes.create({
        data: {
          teacher_id: fulanoDeTal.id,
          discipline_id: pweb.id,
          semester: 1,
          year: 2023,
          finished: true,
          class_plans: {
            createMany: {
              data: [
                { title: "Aula 1", description: "Aula 1 teste" },
                { title: "Aula 2", description: "Aula 2 teste" },
                { title: "Aula 3", description: "Aula 3 teste" },
                { title: "Aula 4", description: "Aula 4 teste" },
              ],
            },
          },
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
              ],
            },
          },
        },
      });
      await prisma.classes.create({
        data: {
          teacher_id: fulanoDeTal.id,
          discipline_id: pweb.id,
          semester: 2,
          year: 2023,
          finished: true,
          class_plans: {
            createMany: {
              data: [
                { title: "Aula 1", description: "Aula 1 teste" },
                { title: "Aula 2", description: "Aula 2 teste" },
                { title: "Aula 3", description: "Aula 3 teste" },
                { title: "Aula 4", description: "Aula 4 teste" },
              ],
            },
          },
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
              ],
            },
          },
        },
      });

      await prisma.classes.create({
        data: {
          teacher_id: fulanoDeTal.id,
          discipline_id: pweb.id,
          semester: 1,
          year: 2024,
          finished: true,
          class_plans: {
            createMany: {
              data: [
                { title: "Aula 1", description: "Aula 1 teste" },
                { title: "Aula 2", description: "Aula 2 teste" },
                { title: "Aula 3", description: "Aula 3 teste" },
                { title: "Aula 4", description: "Aula 4 teste" },
              ],
            },
          },
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
              ],
            },
          },
        },
      });
      await prisma.classes.create({
        data: {
          teacher_id: fulanoDeTal.id,
          discipline_id: pweb.id,
          semester: 2,
          year: 2024,
          finished: true,
          class_plans: {
            createMany: {
              data: [
                { title: "Aula 1", description: "Aula 1 teste" },
                { title: "Aula 2", description: "Aula 2 teste" },
                { title: "Aula 3", description: "Aula 3 teste" },
                { title: "Aula 4", description: "Aula 4 teste" },
              ],
            },
          },
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
              ],
            },
          },
        },
      });
      await prisma.classes.create({
        data: {
          teacher_id: fulanoDeTal.id,
          discipline_id: pweb.id,
          semester: 1,
          year: 2023,
          finished: true,
          class_plans: {
            createMany: {
              data: [
                { title: "Aula 1", description: "Aula 1 teste" },
                { title: "Aula 2", description: "Aula 2 teste" },
                { title: "Aula 3", description: "Aula 3 teste" },
                { title: "Aula 4", description: "Aula 4 teste" },
              ],
            },
          },
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
              ],
            },
          },
        },
      });
      await prisma.classes.create({
        data: {
          teacher_id: fulanoDeTal.id,
          discipline_id: pweb.id,
          semester: 2,
          year: 2023,
          finished: true,
          class_plans: {
            createMany: {
              data: [
                { title: "Aula 1", description: "Aula 1 teste" },
                { title: "Aula 2", description: "Aula 2 teste" },
                { title: "Aula 3", description: "Aula 3 teste" },
                { title: "Aula 4", description: "Aula 4 teste" },
              ],
            },
          },
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
              ],
            },
          },
        },
      });
    });
}

main();

import type { PrismaClient } from "@prisma/client";

export async function seedInglesV(
  prisma: PrismaClient,
  courseId: number,
  teacherId: number,
  students: {
    id: number;
    first_name: string;
    last_name: string;
    user_id: number;
    phone1: string | null;
    phone2: string | null;
  }[]
) {
  return await prisma.disciplines.create({
    data: {
      abbreviation: "LIN500",
      name: "Inglês V",
      course_id: courseId,
      classes: {
        create: {
          teacher_id: teacherId,
          semester: 1,
          year: 2025,
          class_students: {
            createMany: {
              data: students.map((student) => ({
                student_id: student.id,
              })),
            },
          },
          class_schedules: {
            createMany: {
              data: [
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
          class_bibliography: {
            createMany: {
              data: [
                {
                  reference: "HUGHES, J.; Telephone English. Macmillian, 2006.",
                },
                {
                  reference:
                    "OXFORD. Oxford Advanced Learner's Dictionary with CD-Rom, Seventh Edition. Oxford University, 2007.",
                },
              ],
            },
          },
          class_materials: {
            createMany: {
              data: [
                {
                  list_index: 0,
                  title: "Irregular Verbs List",
                  file_format: "png",
                },
                {
                  list_index: 1,
                  title: "Irregular Verbs List (2)",
                  file_format: "docx",
                },
              ],
            },
          },
          class_plans: {
            createMany: {
              data: [
                {
                  title:
                    "Apresentação do Curso e Revisão de Conteúdos Anteriores",
                  description:
                    "Apresentação da disciplina, objetivos e revisão dos principais tópicos do semestre anterior.",
                  planned_date: new Date("2025-02-14"),
                },
                {
                  title: "Vocabulário Profissional e Expressões Comuns",
                  description:
                    "Introdução ao vocabulário utilizado em ambientes profissionais e expressões do cotidiano.",
                  planned_date: new Date("2025-02-21"),
                },
                {
                  title:
                    "Revisão de Tempos Verbais: Present Perfect e Past Simple",
                  description:
                    "Exercícios práticos para diferenciar e utilizar corretamente os tempos verbais.",
                  planned_date: new Date("2025-02-28"),
                },
                {
                  title: "Conversação: Situações no Ambiente de Trabalho",
                  description:
                    "Simulações de diálogos em situações comuns no ambiente profissional.",
                  planned_date: new Date("2025-03-07"),
                },
                {
                  title: "Leitura e Interpretação de Textos Profissionais",
                  description:
                    "Leitura de textos autênticos e discussão sobre vocabulário e compreensão.",
                  planned_date: new Date("2025-03-14"),
                },
                {
                  title: "Redação de E-mails Formais",
                  description:
                    "Estrutura e linguagem adequada para escrever e-mails profissionais em inglês.",
                  planned_date: new Date("2025-03-21"),
                },
                {
                  title: "Listening: Entrevistas de Emprego",
                  description:
                    "Compreensão auditiva de entrevistas e análise de respostas eficazes.",
                  planned_date: new Date("2025-03-28"),
                },
                {
                  title: "Apresentações Orais: Estrutura e Dicas",
                  description:
                    "Como estruturar e apresentar ideias de forma clara e objetiva em inglês.",
                  planned_date: new Date("2025-04-04"),
                },
                {
                  title: "Vocabulário: Negociações e Reuniões",
                  description:
                    "Termos e expressões comuns em negociações e reuniões de trabalho.",
                  planned_date: new Date("2025-04-11"),
                },
                {
                  title: "Prática de Pronúncia: Sons Difíceis para Brasileiros",
                  description:
                    "Exercícios focados em pronúncia de sons específicos do inglês.",
                  planned_date: new Date("2025-04-18"),
                },
                {
                  title: "Leitura: Artigos de Negócios",
                  description:
                    "Leitura e análise de artigos sobre negócios e economia.",
                  planned_date: new Date("2025-04-25"),
                },
                {
                  title: "Expressões Idiomáticas no Ambiente Profissional",
                  description:
                    "Estudo de expressões idiomáticas e seu uso em contextos profissionais.",
                  planned_date: new Date("2025-05-02"),
                },
                {
                  title: "Simulação de Reuniões em Inglês",
                  description:
                    "Atividades práticas simulando reuniões de trabalho em inglês.",
                  planned_date: new Date("2025-05-09"),
                },
                {
                  title: "Redação: Relatórios e Documentos Oficiais",
                  description:
                    "Como redigir relatórios e documentos formais em inglês.",
                  planned_date: new Date("2025-05-16"),
                },
                {
                  title: "Listening: Palestras e Apresentações",
                  description:
                    "Compreensão auditiva de palestras e apresentações profissionais.",
                  planned_date: new Date("2025-05-23"),
                },
                {
                  title: "Vocabulário: Recursos Humanos e Processos Seletivos",
                  description:
                    "Termos e expressões relacionados a RH e processos de seleção.",
                  planned_date: new Date("2025-05-30"),
                },
                {
                  title: "Conversação: Feedback e Avaliações",
                  description:
                    "Prática de diálogos para dar e receber feedback em inglês.",
                  planned_date: new Date("2025-06-06"),
                },
                {
                  title: "Estudo de Caso: Resolução de Problemas",
                  description:
                    "Análise e discussão de casos para resolução de problemas em inglês.",
                  planned_date: new Date("2025-06-13"),
                },
                {
                  title: "Preparação para Prova Final",
                  description:
                    "Revisão dos principais conteúdos e esclarecimento de dúvidas.",
                  planned_date: new Date("2025-06-20"),
                },
                {
                  title: "Avaliação Final e Encerramento",
                  description:
                    "Aplicação da avaliação final e encerramento do semestre.",
                  planned_date: new Date("2025-06-27"),
                },
              ],
            },
          },
          exams: {
            createMany: {
              data: [
                {
                  title: "Prova 1",
                  abbreviation: "P1",
                  planned_date: new Date("2025-04-05"),
                },
                {
                  title: "Prova 2",
                  abbreviation: "P2",
                  planned_date: new Date("2025-05-17"),
                },
                {
                  title: "Prova 3",
                  abbreviation: "P3",
                  planned_date: new Date("2025-06-28"),
                },
              ],
            },
          },
          evaluation_formula: "(P1 + P2 + P3) / 3",
        },
      },
    },
  });
}

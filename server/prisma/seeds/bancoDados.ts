import type { PrismaClient } from "@prisma/client";

export async function seedBancoDados(
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
      abbreviation: "IBD002",
      name: "Banco de Dados ",
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
                  day_of_week: 5,
                  start_time: "07:45",
                  end_time: "08:35",
                },
                {
                  day_of_week: 5,
                  start_time: "08:35",
                  end_time: "09:25",
                },
                {
                  day_of_week: 5,
                  start_time: "09:35",
                  end_time: "10:25",
                },
                {
                  day_of_week: 5,
                  start_time: "10:25",
                  end_time: "11:15",
                },
              ],
            },
          },
          class_bibliography: {
            createMany: {
              data: [
                {
                  reference:
                    "ELMASRI, R.; NAVATHE, S. B. Sistemas de Banco de Dados: Fundamentos e Aplicações. 7 ed. São Paulo: Pearson, 2019.",
                },
                {
                  reference:
                    "NIELD. T. Introduçção à Linguagem SQL: Abordagem Prática Para Iniciantes. 1 ed. Novatec Editora, 2016.",
                },
                {
                  reference:
                    "MARTELLI, R.; FILHO, O. V. S.; CABRAL, A. L. Modelagem e banco de dados. 2 ed. São Paulo: Senac, 2018.",
                },
                {
                  reference:
                    "DATE, C. J. Projeto de Banco de Dados e Teoria Relacional: Formas Normais e Tudo o Mais. Brasil: Novatec Editora, 2015.",
                },
                {
                  reference:
                    "SILBERSCHAT, A.; KORTH, H. F., Sudarshan, S. Sistema de Banco de Daods. GEN LTC, 2020.",
                },
              ],
            },
          },
          class_materials: {
            createMany: {
              data: [
                {
                  list_index: 0,
                  title: "Aula 01 - Introdução",
                  file_format: "pdf",
                },
                {
                  list_index: 1,
                  title: "Aula 02 - Modelagem Conceitual",
                  file_format: "pdf",
                },
                {
                  list_index: 2,
                  title: "Aula 02 - Modelagem Lógica",
                  file_format: "pdf",
                },
              ],
            },
          },
          class_plans: {
            createMany: {
              data: [
                {
                  title: "Introdução aos Bancos de Dados",
                  description:
                    "Apresentação do curso, conceitos iniciais e importância dos bancos de dados.",
                  planned_date: new Date("2025-02-14"),
                },
                {
                  title: "Modelagem Conceitual de Dados",
                  description:
                    "Estudo do modelo entidade-relacionamento e identificação de entidades e relacionamentos.",
                  planned_date: new Date("2025-02-21"),
                },
                {
                  title: "Modelagem Lógica de Dados",
                  description:
                    "Conversão do modelo conceitual para o modelo lógico relacional.",
                  planned_date: new Date("2025-02-28"),
                },
                {
                  title: "Normalização de Dados I",
                  description:
                    "Introdução à normalização e primeiras formas normais.",
                  planned_date: new Date("2025-03-07"),
                },
                {
                  title: "Normalização de Dados II",
                  description:
                    "Formas normais avançadas e dependências funcionais.",
                  planned_date: new Date("2025-03-14"),
                },
                {
                  title: "Linguagem SQL: Introdução",
                  description:
                    "Conceitos básicos de SQL e comandos de consulta simples.",
                  planned_date: new Date("2025-03-21"),
                },
                {
                  title: "SQL: Consultas Avançadas",
                  description:
                    "Consultas com múltiplas tabelas, junções e subconsultas.",
                  planned_date: new Date("2025-03-28"),
                },
                {
                  title: "SQL: Manipulação de Dados",
                  description:
                    "Comandos de inserção, atualização e exclusão de dados.",
                  planned_date: new Date("2025-04-04"),
                },
                {
                  title: "Integridade e Restrições",
                  description:
                    "Chaves primárias, estrangeiras e restrições de integridade.",
                  planned_date: new Date("2025-04-11"),
                },
                {
                  title: "Transações e Controle de Concorrência",
                  description:
                    "Conceitos de transações, propriedades ACID e controle de concorrência.",
                  planned_date: new Date("2025-04-18"),
                },
                {
                  title: "Recuperação e Backup de Dados",
                  description:
                    "Técnicas de backup, recuperação e logs de transações.",
                  planned_date: new Date("2025-04-25"),
                },
                {
                  title: "Índices e Otimização de Consultas",
                  description:
                    "Uso de índices e estratégias para otimização de consultas.",
                  planned_date: new Date("2025-05-02"),
                },
                {
                  title: "Procedures, Functions e Triggers",
                  description:
                    "Criação e uso de procedures, funções e triggers em bancos de dados.",
                  planned_date: new Date("2025-05-09"),
                },
                {
                  title: "Segurança em Bancos de Dados",
                  description:
                    "Princípios de segurança, controle de acesso e permissões.",
                  planned_date: new Date("2025-05-16"),
                },
                {
                  title: "Modelagem Física de Dados",
                  description:
                    "Implementação física do banco de dados e organização de arquivos.",
                  planned_date: new Date("2025-05-23"),
                },
                {
                  title: "Bancos de Dados NoSQL",
                  description:
                    "Introdução aos bancos de dados NoSQL e principais diferenças em relação ao modelo relacional.",
                  planned_date: new Date("2025-05-30"),
                },
                {
                  title: "Armazenamento e Recuperação de Dados",
                  description:
                    "Técnicas de armazenamento e métodos de recuperação de dados.",
                  planned_date: new Date("2025-06-06"),
                },
                {
                  title: "Projeto de Banco de Dados",
                  description:
                    "Etapas do projeto de banco de dados e estudo de caso prático.",
                  planned_date: new Date("2025-06-13"),
                },
                {
                  title: "Tendências em Bancos de Dados",
                  description:
                    "Novas tecnologias e tendências em bancos de dados.",
                  planned_date: new Date("2025-06-20"),
                },
                {
                  title: "Revisão e Avaliação Final",
                  description:
                    "Revisão dos principais tópicos e avaliação final do curso.",
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
                  planned_date: new Date("2025-04-04"),
                },
                {
                  title: "Prova 2",
                  abbreviation: "P2",
                  planned_date: new Date("2025-05-16"),
                },
                {
                  title: "Prova Final",
                  abbreviation: "PF",
                  planned_date: new Date("2025-06-27"),
                },
              ],
            },
          },
          evaluation_formula: "(P1 * 0.3) + (P2 * 0.3) + (PF * 0.4)",
        },
      },
    },
  });
}

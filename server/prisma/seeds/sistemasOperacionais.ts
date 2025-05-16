import type { PrismaClient } from "@prisma/client";

export async function seedSistemasOperacionais(
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
      abbreviation: "ISO200",
      name: "Sistemas Operacionais II",
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
                  start_time: "09:35",
                  end_time: "10:25",
                },
                {
                  day_of_week: 6,
                  start_time: "10:25",
                  end_time: "11:15",
                },
                {
                  day_of_week: 6,
                  start_time: "11:15",
                  end_time: "12:05",
                },
                {
                  day_of_week: 6,
                  start_time: "12:05",
                  end_time: "12:55",
                },
              ],
            },
          },
          class_bibliography: {
            createMany: {
              data: [
                {
                  reference:
                    "OLIVEIRA, R. S.; CARISSIMI, A. S.; TOSCANI, S. S. Sistemas Operacionais: Livros Didáticos 11. Bookman, 2008. ",
                },
                {
                  reference:
                    "TANENBAUM, A. S. Sistemas Operacionais Modernos. Pretice Hall (Pearson), 2007.",
                },
                {
                  reference:
                    "HUNT, C. Linux servidores de redes. Rio de Janeiro: Ciência Moderna, 2004.",
                },
              ],
            },
          },
          class_materials: {
            createMany: {
              data: [
                {
                  list_index: 0,
                  title: "Apostila 1 - Comandos básicos",
                  file_format: "pdf",
                },
                {
                  list_index: 1,
                  title: "Apostila 2 - Comandos e permissões",
                  file_format: "pdf",
                },
                {
                  list_index: 2,
                  title: "Lista de Exercícios 1 - Comandos básicos",
                  file_format: "pdf",
                },
                {
                  list_index: 3,
                  title:
                    "Lista de Exercícios 2 - Comandos permissões e usuários",
                  file_format: "pdf",
                },
                {
                  list_index: 4,
                  title:
                    "Lista de Exercícios 2 - Comandos permissões e usuários - SOLUÇÃO",
                  file_format: "pdf",
                },
                {
                  list_index: 5,
                  title: "Lista de Exercícios 1 - Comandos básicos - SOLUÇÃO",
                  file_format: "pdf",
                },
                {
                  list_index: 6,
                  title: "Apostila Shell Script",
                  file_format: "pdf",
                },
              ],
            },
          },
          class_plans: {
            createMany: {
              data: [
                {
                  title: "Introdução aos Sistemas Operacionais",
                  description:
                    "Apresentação do conceito de sistemas operacionais, sua evolução histórica e principais funções.",
                  planned_date: new Date("2025-02-15"),
                },
                {
                  title: "Arquitetura de Sistemas Operacionais",
                  description:
                    "Estudo das arquiteturas monolítica, em camadas, microkernel e híbrida.",
                  planned_date: new Date("2025-02-22"),
                },
                {
                  title: "Processos e Threads",
                  description:
                    "Definição de processos e threads, ciclo de vida e comunicação entre processos.",
                  planned_date: new Date("2025-03-01"),
                },
                {
                  title: "Escalonamento de Processos",
                  description:
                    "Algoritmos de escalonamento, critérios de avaliação e exemplos práticos.",
                  planned_date: new Date("2025-03-08"),
                },
                {
                  title: "Sincronização e Concorrência",
                  description:
                    "Problemas de concorrência, semáforos, mutexes e monitores.",
                  planned_date: new Date("2025-03-15"),
                },
                {
                  title: "Deadlocks",
                  description:
                    "Conceito de deadlock, condições necessárias, prevenção, evitação e recuperação.",
                  planned_date: new Date("2025-03-22"),
                },
                {
                  title: "Gerenciamento de Memória I",
                  description:
                    "Memória física e virtual, segmentação e paginação.",
                  planned_date: new Date("2025-03-29"),
                },
                {
                  title: "Gerenciamento de Memória II",
                  description:
                    "Algoritmos de substituição de páginas e técnicas de alocação.",
                  planned_date: new Date("2025-04-05"),
                },
                {
                  title: "Sistemas de Arquivos I",
                  description:
                    "Estrutura de sistemas de arquivos, diretórios e gerenciamento de espaço.",
                  planned_date: new Date("2025-04-12"),
                },
                {
                  title: "Sistemas de Arquivos II",
                  description:
                    "Permissões, segurança e journaling em sistemas de arquivos.",
                  planned_date: new Date("2025-04-19"),
                },
                {
                  title: "Entrada e Saída",
                  description:
                    "Gerenciamento de dispositivos de entrada e saída, drivers e buffers.",
                  planned_date: new Date("2025-04-26"),
                },
                {
                  title: "Sistemas Operacionais em Rede",
                  description:
                    "Conceitos de sistemas distribuídos, comunicação e compartilhamento de recursos.",
                  planned_date: new Date("2025-05-03"),
                },
                {
                  title: "Virtualização",
                  description:
                    "Conceitos de virtualização, máquinas virtuais e containers.",
                  planned_date: new Date("2025-05-10"),
                },
                {
                  title: "Segurança em Sistemas Operacionais",
                  description:
                    "Mecanismos de proteção, autenticação e controle de acesso.",
                  planned_date: new Date("2025-05-17"),
                },
                {
                  title: "Linux: Estrutura e Comandos Básicos",
                  description:
                    "Introdução ao Linux, estrutura de diretórios e comandos essenciais.",
                  planned_date: new Date("2025-05-24"),
                },
                {
                  title: "Linux: Gerenciamento de Usuários e Permissões",
                  description:
                    "Criação de usuários, grupos e configuração de permissões no Linux.",
                  planned_date: new Date("2025-05-31"),
                },
                {
                  title: "Shell Script I",
                  description:
                    "Introdução ao shell script, variáveis, operadores e estruturas de controle.",
                  planned_date: new Date("2025-06-07"),
                },
                {
                  title: "Shell Script II",
                  description:
                    "Automação de tarefas, manipulação de arquivos e agendamento.",
                  planned_date: new Date("2025-06-14"),
                },
                {
                  title: "Estudo de Caso: Gerenciamento de Processos no Linux",
                  description:
                    "Análise prática do gerenciamento de processos e recursos no Linux.",
                  planned_date: new Date("2025-06-21"),
                },
                {
                  title: "Revisão e Avaliação Final",
                  description:
                    "Revisão dos principais tópicos abordados e realização da avaliação final.",
                  planned_date: new Date("2025-06-28"),
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
          evaluation_formula: "(P1 * 0.3) + (P2 * 0.3) + (P3 * 0.4)",
        },
      },
    },
  });
}

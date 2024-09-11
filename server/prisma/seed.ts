import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.courses
  //   .createMany({
  //     data: [
  //       { name: "Análise e Desenvolvimento de Sistemas", abbreviation: "ADS" },
  //       { name: "Fabricação Mecânica", abbreviation: "FM" },
  //       { name: "Mecânica Industrial", abbreviation: "MI" },
  //     ],
  //   })
  //   .then((result) => {
  //     if (result) console.log("[OK] COURSES");
  //   });
  // await prisma.disciplines
  //   .createMany({
  //     data: [
  //       { course_id: 2, name: "Gestão de Equipes", abbreviation: "GE" },
  //       {
  //         course_id: 2,
  //         name: "Ética e Responsabilidade Profissional",
  //         abbreviation: "ERP",
  //       },
  //       {
  //         course_id: 2,
  //         name: "Gestão e Governanã de TI",
  //         abbreviation: "GGTI",
  //       },
  //       { course_id: 2, name: "Empreendedorismo", abbreviation: "EE" },
  //       { course_id: 2, name: "Inglês VI", abbreviation: "IVI" },
  //       {
  //         course_id: 2,
  //         name: "Inteligência Artificial (Escolha 3)",
  //         abbreviation: "IAE3",
  //       },
  //       { course_id: 2, name: "Laboratório de Redes", abbreviation: "LR" },
  //       { course_id: 2, name: "Gestão de Projetos", abbreviation: "GP" },
  //     ],
  //   })
  //   .then((result) => {
  //     if (result) console.log("[OK] DISCIPLINES");
  //   });
}

main().then(() => {});

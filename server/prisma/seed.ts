import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.courses
    .createMany({
      data: [
        {
          id: 1,
          name: "Análise e Desenvolvimento de Sistemas",
          abbreviation: "ADS",
        },
        { id: 2, name: "Fabricação Mecânica", abbreviation: "FM" },
        { id: 3, name: "Mecânica Industrial", abbreviation: "MI" },
      ],
    })
    .then((result) => {
      if (result) console.log("[OK] COURSES");
    });
  await prisma.disciplines
    .createMany({
      data: [
        { course_id: 1, name: "Gestão de Equipes", abbreviation: "GE" },
        {
          course_id: 1,
          name: "Ética e Responsabilidade Profissional",
          abbreviation: "ERP",
        },
        {
          course_id: 1,
          name: "Gestão e Governanã de TI",
          abbreviation: "GGTI",
        },
        { course_id: 1, name: "Empreendedorismo", abbreviation: "EE" },
        { course_id: 1, name: "Inglês VI", abbreviation: "IVI" },
        {
          course_id: 1,
          name: "Inteligência Artificial (Escolha 3)",
          abbreviation: "IAE3",
        },
        { course_id: 1, name: "Laboratório de Redes", abbreviation: "LR" },
        { course_id: 1, name: "Gestão de Projetos", abbreviation: "GP" },
        {
          course_id: 1,
          name: "Sociedade e Tecnollgia",
          abbreviation: "HST002",
        },
        {
          course_id: 1,
          name: "Metodologia da Pesquisa Científico-Tecnológica",
          abbreviation: "TTG001",
        },
      ],
    })
    .then((result) => {
      if (result) console.log("[OK] DISCIPLINES");
    });
}

main().then(() => {});

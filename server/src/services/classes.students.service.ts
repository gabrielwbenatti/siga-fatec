import db from "../config/database";

class ClassesStudentsServices {
  getClassesStudents = async (classId: number) => {
    const students = await db.students.findMany({
      include: {
        user: {
          select: { email: true },
        },
      },
      where: {
        class_students: {
          some: {
            class_id: classId,
          },
        },
      },
    });
    const computedGrades = await db.class_students.findMany({
      select: {
        student_id: true,
        computed_grade: true,
      },
      where: {
        class_id: classId,
      },
    });

    const presences: { studentId: number; frequency: number }[] = [];
    for (const stud of students) {
      const frequency = await calculateFrequency(stud.id, classId);
      presences.push({ studentId: stud.id, frequency: frequency.frequency });
    }

    const processedResult = students.map((stud) => ({
      id: stud.id,
      full_name: [stud.first_name, stud.last_name].join(" "),
      phone1: stud.phone1,
      phone2: stud.phone2,
      email: stud.user.email,
      computed_grade:
        computedGrades.find((comp) => comp.student_id === stud.id)
          ?.computed_grade ?? 0,
      frequency:
        presences.find((pres) => pres.studentId === stud.id)?.frequency ?? 0,
    }));

    return processedResult;
  };
}

async function calculateFrequency(studentId: number, classId: number) {
  // 1. Obter todos os planos de aula aplicados (onde applied_date não é nulo)
  const aulasAplicadas = await db.class_plans.findMany({
    where: {
      class_id: classId,
      applied_date: {
        not: null,
      },
    },
    select: {
      id: true,
    },
  });

  const totalAulas = aulasAplicadas.length;

  // 2. Para cada aula aplicada, verificar se o aluno esteve presente
  let presencasAluno = 0;

  for (const aula of aulasAplicadas) {
    // Verificamos se existe pelo menos uma presença registrada para esta aula
    const temPresenca = await db.plans_attendances.findFirst({
      where: {
        class_id: classId,
        student_id: studentId,
        class_plan_id: aula.id,
        is_present: true,
      },
    });

    if (temPresenca) {
      presencasAluno++;
    }
  }

  // 3. Calcular a porcentagem de frequência
  // Garantimos que nunca vai passar de 100%
  const frequencia =
    totalAulas > 0 ? Math.min((presencasAluno / totalAulas) * 100, 100) : 0;

  return {
    totalAulas,
    totalPresencas: presencasAluno,
    frequency: frequencia,
  };
}

export default new ClassesStudentsServices();

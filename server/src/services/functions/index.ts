import db from "../../config/database";

export async function calculateFrequency(studentId: number, classId: number) {
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

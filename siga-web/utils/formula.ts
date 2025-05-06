export function calculateFormula(
  submissions: {
    exam_id: number;
    abbreviation: string;
    submission: number | null;
  }[],
  formula: string,
): number {
  const values: Record<string, number> = {};
  for (const submission of submissions) {
    values[submission.abbreviation] = submission.submission || 0;
  }

  let expression = formula;
  for (const [abbr, value] of Object.entries(values)) {
    expression = expression.replace(
      new RegExp(`\\b${abbr}\\b`, "g"),
      value.toString(),
    );
  }

  try {
    const result = Math.round(eval(expression) * 100) / 100;
    return result;
  } catch (err) {
    console.error("Erro ao calcular fórmula:", err);
    return 0;
  }
}

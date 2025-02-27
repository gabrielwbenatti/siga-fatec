export function formatDate(
  date: string | Date | null | undefined,
  format: "pt-BR" | "input" = "pt-BR",
): string | undefined {
  if (!date) return undefined;

  let parts: number[] = [];

  if (typeof date === "string") {
    if (date.includes("T") || date.includes("-")) {
      const dateParts = date.split("T")[0].split("-");
      if (dateParts.length === 3) {
        const [year, month, day] = dateParts;
        parts = [parseInt(year), parseInt(month), parseInt(day)];
      }
    }
  } else if (date instanceof Date) {
    parts = [
      date.getUTCFullYear(),
      date.getUTCMonth() + 1, // Em JS o Mês começa em 0
      date.getUTCDate(),
    ];
  }

  if (parts.length !== 3 || parts.some(isNaN)) {
    return undefined;
  }

  const [year, month, day] = parts;

  switch (format) {
    case "input": {
      return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    }
    case "pt-BR": {
      return `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;
    }
  }
}

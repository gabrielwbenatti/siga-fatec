export function formatDate(
  date: string | Date | null | undefined,
  format: "pt-BR" | "input" = "pt-BR",
): string | undefined {
  if (!date) return undefined;

  let dateObj: Date;

  if (typeof date === "string") {
    dateObj = new Date(date + "T00:00:00Z");
  } else if (date instanceof Date) {
    dateObj = date;
  } else {
    return undefined;
  }

  if (format === "input") {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth()).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  }

  if (format === "pt-BR") {
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth()).padStart(2, "0");
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return undefined;
}

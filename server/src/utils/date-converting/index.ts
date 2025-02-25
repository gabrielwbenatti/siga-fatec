import moment from "moment";

const toISODate = (date: Date | string): string => {
  return moment(date).toISOString();
};

const fromISODateToDate = (
  date: Date | string,
  formatMask: string = "yyyy-MM-DD"
): string => {
  return moment(date).format(formatMask);
};

const fromISODate = (isoString: string): Date => {
  return moment(isoString).toDate();
};

export { toISODate, fromISODate, fromISODateToDate };

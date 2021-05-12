import moment from "moment";

export const getDate = (date: Date): string => {
  const year: string = date.getFullYear().toString();
  const month: string =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1).toString()
      : (date.getMonth() + 1).toString();
  const day: string =
    date.getDate() < 10
      ? "0" + date.getDate().toString()
      : date.getDate().toString();
  return year + "-" + month + "-" + day;
};

export const getFullDate = (): string => {
  const date: Date = new Date();
  return getDate(date);
};

export const dateToString = (date: Date): string => {
  const strDate: string = getDate(date);
  const strTime: string = date.toLocaleTimeString("it-IT");
  return strDate + "T" + strTime + ".000Z";
};

export const getNextDate = (date: string): string => {
  const curr = new Date(date);
  const next = new Date(curr);
  next.setDate(next.getDate() + 1);
  return getDate(next);
};

export const getWeeklyDates = (): { startDate: string; endDate: string } => {
  const startOfWeek = moment().startOf("week").toDate();
  const endOfWeek = moment().endOf("week").toDate();
  return { startDate: getDate(startOfWeek), endDate: getDate(endOfWeek) };
};

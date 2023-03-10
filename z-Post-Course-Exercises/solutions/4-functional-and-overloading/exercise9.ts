function parseDate(date: string, format: string): Date;
function parseDate(date: string): Date;
function parseDate(date: string, format?: string): Date {
  const parsedDate = format
    ? // parse with format
      new Date(date) // use default format
    : new Date(Date.parse(date));
  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date");
  }
  return parsedDate;
}

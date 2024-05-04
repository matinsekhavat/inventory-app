export default function displayPersianDate(date: number): string {
  const persianDate = new Date(date);
  return persianDate.toLocaleDateString("fa-IR");
}

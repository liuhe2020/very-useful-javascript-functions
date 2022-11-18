const date = new Date();
const dayOfWeek = date.getDate();
const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
const orderOfWeek = 1; // order of the week, e.g 1 for first week of the month
const firstMonday =
  firstDayOfMonth.getDate() * 2 + 7 * orderOfWeek - firstDayOfMonth.getDay();

let firstWeekDays = [firstMonday];

for (let i = 1; i < 5; i++) {
  firstWeekDays = [...firstWeekDays, firstMonday + i];
}

console.log(firstWeekDays);

// find weekdays in a complete week in a month
// example below will find the first complete weekdays in dec 2022

const date = new Date(2022, 11, 4); // pass in any date to get the ordered week, e.g. Date(2022, 10, 15)
const dayOfWeek = date.getDate();
const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
const orderOfWeek = 1; // order of the week, e.g. 1 for first week of the month
const orderedMonday =
  firstDayOfMonth.getDate() * 2 + 7 * orderOfWeek - firstDayOfMonth.getDay();

let weekDays = [orderedMonday];

for (let i = 1; i < 5; i++) {
  weekDays = [...weekDays, orderedMonday + i];
}

console.log(weekDays);

const calFirstWeekday = () => {
  const date = new Date(2023, 3, 3); // pass in any date to get that month, e.g. Date(2022, 10, 15)
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfFirstDayOfMonth = firstDayOfMonth.getDay();
  const dateOfFirstDayOfMonth = firstDayOfMonth.getDate();

  // saturday
  if (dayOfFirstDayOfMonth === 6) {
    return dateOfFirstDayOfMonth + 2;
  }

  // sunday
  if (dayOfFirstDayOfMonth === 0) {
    return dateOfFirstDayOfMonth + 1;
  }

  return dateOfFirstDayOfMonth;
};

console.log(calFirstWeekday());

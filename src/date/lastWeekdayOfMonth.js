const calLastWeekday = () => {
  const date = new Date(2022, 1, 27); // pass in any date to get that month, e.g. Date(2022, 10, 15)
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const dayOfLastDayOfMonth = lastDayOfMonth.getDay();
  const dateOfLastDayOfMonth = lastDayOfMonth.getDate();

  // saturday
  if (dayOfLastDayOfMonth === 6) {
    return dateOfLastDayOfMonth - 1;
  }

  // sunday
  if (dayOfLastDayOfMonth === 0) {
    return dateOfLastDayOfMonth - 2;
  }

  return dateOfLastDayOfMonth;
};

console.log(calLastWeekday());

function countHours(year, holidays) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let getDays = [];

  holidays.map(holiday => {
    const formatDate = new Date(`${holiday} ${year}`).getDay();
    getDays.push(days[formatDate]);
  });

  let workingDay = getDays.filter(day => day !== "Sunday" && day !== "Saturday")

  console.log(getDays);

  let hours = workingDay.length * 2;

  return hours;
}

export default (secs) => {
  const sec_num = parseInt(secs, 10)
  const hours   = Math.floor(sec_num / 3600)
  const minutes = Math.floor(sec_num / 60) % 60
  const seconds = sec_num % 60

  return [hours,minutes,seconds]
    .map(v => v < 10 ? "0" + v : v)
    .filter((v,i) => v !== "00" || i > 0)
    .join(":") 
}

export const dateFormatter = (date) => {
  const newDate = new Date(date)
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  const day = newDate.getDate();
  const monthIndex = newDate.getMonth();
  const year = newDate.getFullYear();

  return  monthNames[monthIndex] + " " + day + ', ' + year;
}

export const dateTimeFormatter = (date) => {
  const newDate = new Date(date)
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  const day = newDate.getDate();
  const monthIndex = newDate.getMonth();
  const year = newDate.getFullYear();
  const hours = newDate.getHours() % 12
  const minute = newDate.getMinutes()

  return  `${monthNames[monthIndex]} ${day}, ${year} ${hours}:${minute} ${newDate.getHours() > 12 ? "P.M." :"A.M."}`;
}

export const timeSorter = (a, b) => {
  if (a.createdAt > b.createdAt) {
    return -1
  } else if (a.createdAt < b.createdAt) {
    return 1
  } else {
    return 0
  }
}
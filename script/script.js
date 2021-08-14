const deg = 6;
//MOSCOW
const hoMoscow = document.getElementById("ho__Moscow");
const minMoscow = document.getElementById("min__Moscow");
const secMoscow = document.getElementById("sec__Moscow");
const timeMoscow = document.getElementById("time__Moscow");
const dayMoscow = document.getElementById("day__Moscow");
const mounthMoscow = document.getElementById("mounth__Moscow");
//NY
const hoNY = document.getElementById("ho__NY");
const minNY = document.getElementById("min__NY");
const secNY = document.getElementById("sec__NY");
const timeNY = document.getElementById("time__NY");
const dayNY = document.getElementById("day__NY");
const mounthNY = document.getElementById("mounth__NY");
//LONDON
const hoLondon = document.getElementById("ho__London");
const minLondon = document.getElementById("min__London");
const secLondon = document.getElementById("sec__London");
const timeLondon = document.getElementById("time__London");
const dayLondon = document.getElementById("day__London");
const mounthLondon = document.getElementById("mounth__London");
//SIDNEY
const hoSidney = document.getElementById("ho__Sidney");
const minSidney = document.getElementById("min__Sidney");
const secSidney = document.getElementById("sec__Sidney");
const timeSidney = document.getElementById("time__Sidney");
const daySidney = document.getElementById("day__Sidney");
const mounthSidney = document.getElementById("mounth__Sidney");

setInterval(() => {
  let day = new Date();
  const dayWeekAll = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const mounth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let mounthUTC = day.getUTCMonth();
  let dateUTC = day.getUTCDate();
  let dayUTC = day.getUTCDay();
  let hourUTC = day.getUTCHours();
  let minUTC = day.getUTCMinutes();
  let secUTC = day.getUTCSeconds();
  function gatDateForSityes(difference) {
    hourUTC += difference;
    if (hourUTC > 23) {
      hourUTC = hourUTC - 24;
      dateUTC += 1;
      if (dateUTC > 31) {
        dateUTC = dateUTC - 31;
        mounthUTC += 1;
        if (mounthUTC > 11) {
          mounthUTC = mounthUTC - 12;
        }
      }
      dayUTC += 1;
      if (dayUTC > 6) {
        dayUTC = dayUTC - 7;
      }
    }
  }

  function reternDay() {
    mounthUTC = day.getUTCMonth();
    dateUTC = day.getUTCDate();
    dayUTC = day.getUTCDay();
    hourUTC = day.getUTCHours();
    minUTC = day.getUTCMinutes();
    secUTC = day.getUTCSeconds();
  }
  // MOSCOW
  hoMoscow.style.transform = `rotateZ(${
    (hourUTC + 3) * 30 + (minUTC * deg) / 12
  }deg)`;
  minMoscow.style.transform = `rotateZ(${minUTC * deg}deg)`;
  secMoscow.style.transform = `rotateZ(${secUTC * deg}deg)`;
  gatDateForSityes(3);
  timeMoscow.innerHTML = `${hourUTC}:${minUTC}:${secUTC}`;
  dayMoscow.innerHTML = `${dayWeekAll[dayUTC]}`;
  mounthMoscow.innerHTML = `${dateUTC} ${mounth[mounthUTC]}`;
  reternDay();

  // NY
  hoNY.style.transform = `rotateZ(${
    (hourUTC - 4) * 30 + (minUTC * deg) / 12
  }deg)`;
  minNY.style.transform = `rotateZ(${minUTC * deg}deg)`;
  secNY.style.transform = `rotateZ(${secUTC * deg}deg)`;
  gatDateForSityes(-4);
  timeNY.innerHTML = `${hourUTC}:${minUTC}:${secUTC}`;
  dayNY.innerHTML = `${dayWeekAll[dayUTC]}`;
  mounthNY.innerHTML = `${dateUTC} ${mounth[mounthUTC]}`;
  reternDay();

  // LONDON
  hoLondon.style.transform = `rotateZ(${
    (hourUTC + 1) * 30 + (minUTC * deg) / 12
  }deg)`;
  minLondon.style.transform = `rotateZ(${minUTC * deg}deg)`;
  secLondon.style.transform = `rotateZ(${secUTC * deg}deg)`;
  gatDateForSityes(1);
  timeLondon.innerHTML = `${hourUTC}:${minUTC}:${secUTC}`;
  dayLondon.innerHTML = `${dayWeekAll[dayUTC]}`;
  mounthLondon.innerHTML = `${dateUTC} ${mounth[mounthUTC]}`;
  reternDay();

  // SIDNEY
  hoSidney.style.transform = `rotateZ(${
    (hourUTC + 10) * 30 + (minUTC * deg) / 12
  }deg)`;
  minSidney.style.transform = `rotateZ(${minUTC * deg}deg)`;
  secSidney.style.transform = `rotateZ(${secUTC * deg}deg)`;
  gatDateForSityes(10);
  timeSidney.innerHTML = `${hourUTC}:${minUTC}:${secUTC}`;
  daySidney.innerHTML = `${dayWeekAll[dayUTC]}`;
  mounthSidney.innerHTML = `${dateUTC} ${mounth[mounthUTC]}`;
  reternDay();
});

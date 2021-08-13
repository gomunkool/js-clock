const deg = 6;
const hoMoscow = document.getElementById("ho__Moscow");
const minMoscow = document.getElementById("min__Moscow");
const secMoscow = document.getElementById("sec__Moscow");

const hoNY = document.getElementById("ho__NY");
const minNY = document.getElementById("min__NY");
const secNY = document.getElementById("sec__NY");

const hoLondon = document.getElementById("ho__London");
const minLondon = document.getElementById("min__London");
const secLondon = document.getElementById("sec__London");

const hoSidney = document.getElementById("ho__Sidney");
const minSidney = document.getElementById("min__Sidney");
const secSidney = document.getElementById("sec__Sidney");

setInterval(() => {
  let day = new Date();
  // MOSCOW
  let hhMoscow = day.getHours() * 30;
  let mmMoscow = day.getMinutes() * deg;
  let ssMoscow = day.getSeconds() * deg;

  hoMoscow.style.transform = `rotateZ(${hhMoscow + mmMoscow / 12}deg)`;
  minMoscow.style.transform = `rotateZ(${mmMoscow}deg)`;
  secMoscow.style.transform = `rotateZ(${ssMoscow}deg)`;

  // NY
  let hhNY = (day.getUTCHours() - 4) * 30;
  let mmNY = day.getUTCMinutes() * deg;
  let ssNY = day.getUTCSeconds() * deg;

  hoNY.style.transform = `rotateZ(${hhNY + mmNY / 12}deg)`;
  minNY.style.transform = `rotateZ(${mmNY}deg)`;
  secNY.style.transform = `rotateZ(${ssNY}deg)`;

  // LONDON
  let hhLondon = (day.getUTCHours() + 1) * 30;
  let mmLondon = day.getUTCMinutes() * deg;
  let ssLondon = day.getUTCSeconds() * deg;

  hoLondon.style.transform = `rotateZ(${hhLondon + mmLondon / 12}deg)`;
  minLondon.style.transform = `rotateZ(${mmLondon}deg)`;
  secLondon.style.transform = `rotateZ(${ssLondon}deg)`;

  // SIDNEY
  let hhSidney = (day.getUTCHours() + 10) * 30;
  let mmSidney = day.getUTCMinutes() * deg;
  let ssSidney = day.getUTCSeconds() * deg;

  hoSidney.style.transform = `rotateZ(${hhSidney + mmSidney / 12}deg)`;
  minSidney.style.transform = `rotateZ(${mmSidney}deg)`;
  secSidney.style.transform = `rotateZ(${ssSidney}deg)`;
});

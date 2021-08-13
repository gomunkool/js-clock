const deg = 6;
const hoMoscow = document.getElementById("ho__Moscow");
const minMoscow = document.getElementById("min__Moscow");
const secMoscow = document.getElementById("sec__Moscow");

setInterval(() => {
  let dayMoscow = new Date();
  let hhMoscow = dayMoscow.getHours() * 30;
  let mmMoscow = dayMoscow.getMinutes() * deg;
  let ssMoscow = dayMoscow.getSeconds() * deg;

  hoMoscow.style.transform = `rotateZ(${hhMoscow + mmMoscow / 12}deg)`;
  minMoscow.style.transform = `rotateZ(${mmMoscow}deg)`;
  secMoscow.style.transform = `rotateZ(${ssMoscow}deg)`;
});

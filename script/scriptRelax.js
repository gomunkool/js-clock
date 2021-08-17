const notise = document.getElementById("notise");
const taimer = document.getElementById("taimer");
let time = 60;

setInterval(countdownTime, 1000);
function countdownTime() {
  const min = Math.floor(time / 60);
  let sec = time % 60;
  sec = sec < 10 ? "0" + sec : sec;
  taimer.innerHTML = `${min}:${sec}`;
  time--;
  document.addEventListener("mousemove", () => {
    time = 60;
    notise.innerHTML = "try again";
    setTimeout(() => {
      notise.innerHTML = "";
    }, 2500);
  });
  document.addEventListener("click", () => {
    time = 60;
    notise.innerHTML = "try again";
    setTimeout(() => {
      notise.innerHTML = "";
    }, 2500);
  });
  document.addEventListener("keydown", () => {
    time = 60;
    notise.innerHTML = "try again";
    setTimeout(() => {
      notise.innerHTML = "";
    }, 2500);
  });
  if (time === 0 || time < 0) {
    taimer.innerHTML = `You're the best`;
  }
}

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const titleEl = document.getElementById("title");

setInterval(() => {
  const now = new Date();
  const lezione = new Date("2023-02-07 9:30");
  const adessoMill = now.getTime();
  const lezioneMill = lezione.getTime();
  const diff = lezioneMill - adessoMill;

  const lezioneSec = parseInt(diff / 1000);
  const seconds = lezioneSec % 60;
  const minutes = parseInt((lezioneSec / 60) % 60);
  const hours = parseInt((lezioneSec / 60 / 60) % 24);
  const days = parseInt(lezioneSec / 60 / 60 / 24);

  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
  daysEl.innerHTML = days < 10 ? "0" + days : days;
}, 1000);

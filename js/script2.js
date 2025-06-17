const totalTime = 30;
let timeLeft = totalTime;

const circle = document.querySelector(".progress");
const text = document.getElementById("time-text");

const radius = 45;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

function setProgress(time) {
  const offset = circumference * (1 - time / totalTime);
  circle.style.strokeDashoffset = -offset; // Impostiamo il valore negativo per la rotazione oraria
}

function updateTimer() {
  if (timeLeft <= 0) {
    /* text.textContent = "0"; */
    text.innerHTML = `<p>SECONDS</br><span>0</span></br>REMANING</p>`;
    return;
  }

  setProgress(timeLeft);
  /*text.textContent = timeLeft; */
  text.innerHTML = `<p>SECONDS</br><span>${timeLeft}</span></br>REMANING</p>`;
  timeLeft--;

  setTimeout(updateTimer, 1000);
}

updateTimer();

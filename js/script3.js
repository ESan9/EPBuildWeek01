const button = document.getElementById("nextPage");

button.addEventListener("click", (e) => {
  window.location.href = "index4.html";
});

const circleBottom = document.querySelector(".bg");
const circleTop = document.querySelector(".progress");
const percentCorrect = document.querySelector("#results #correct h3");
const percentWrong = document.querySelector("#results #wrong h3");
const totalN = document.querySelectorAll(".totalQuestions");
let answersCorrect = window.localStorage.getItem("numberCorrectAnswers");
let totalQuestions = window.localStorage.getItem("totalNumberQuestions");

totalN.forEach((number) => {
  number.textContent = totalQuestions;
});

const radius = 45;
const circumference = 2 * Math.PI * radius;
circleTop.style.strokeDashArray = circumference;

const setProgress = function (answersCorrect) {
  const offset = circumference * (1 - answersCorrect / totalQuestions);
  circleTop.style.strokeDashoffset = -offset; // Impostiamo il valore negativo per la rotazione oraria
  circleBottom.style.stroke = "rgba(209, 42, 159, 0.958)";
};

const correctWrong = function () {
  const nCorrect = document.getElementById("totalAnswersCorrect");
  nCorrect.innerText = answersCorrect;
  const nWrong = document.getElementById("totalAnswersWrong");
  let answersWrong = totalQuestions - answersCorrect;
  nWrong.innerText = answersWrong;

  const percentC = Math.floor((answersCorrect / totalQuestions) * 100);
  console.log(`Percentuale arrotondata: ${percentC}%`);
  percentCorrect.textContent = `${percentC}%`;

  const percentW = Math.ceil((answersWrong / totalQuestions) * 100);
  console.log(`Percentuale arrotondata: ${percentW}%`);
  percentWrong.textContent = `${percentW}%`;

  setProgress(answersCorrect);

  const message = document.getElementById("textResult");

  if (percentC > 50) {
    message.innerHTML = `<h3>Congratulations!</h3>
            <br />
            <span class="promoted"> You passed the exam. </span> <br />
            <span class="message">
              We'll send you the certificate
              <br />
              in few minutes. <br />
              Check your email (including<br />promotions / spam folder)
            </span>`;
  } else if (percentW >= 50) {
    message.setAttribute("style", "bottom: 11em");
    message.innerHTML = `<h3>I'm sorry</h3>
            <br />
            <span class="failed">you didn't pass the exam. </span> <br />
          `;
  }
};

correctWrong();

let answersWrong = totalQuestions - answersCorrect;

if (answersCorrect === totalQuestions) {
  const changeMascotte = document.getElementById("mascotte");
  changeMascotte.src = "./assets/img/mascwin.png";
  const confettiWrapper = document.querySelector(".contenitore-felice");
  // Esprime la sua felicità //
  for (let i = 0; i < 70; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti-piece");
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.setProperty("--fall-duration", `${Math.random() * 2 + 2}s`);
    confetti.style.setProperty("--confetti-color", getRandomColor());
    confettiWrapper.appendChild(confetti);
  }
  function getRandomColor() {
    const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#ff69b4"];
    return colors[Math.floor(Math.random() * colors.length)];
  }
} else if (answersCorrect > answersWrong) {
} else {
  const pioveInCasa = document.querySelector(".contenitore-triste");
  // Piove //
  for (let i = 0; i < 70; i++) {
    const pioggia = document.createElement("div");
    pioggia.classList.add("pioggia-piece");
    pioggia.style.left = `${Math.random() * 100}%`;
    pioggia.style.setProperty("--fall-duration", `${Math.random() * 1}s`);
    pioveInCasa.appendChild(pioggia);
  }
}

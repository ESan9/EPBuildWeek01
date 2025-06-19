const totalTime = 60;
let timeLeft = totalTime;
let isTimerAlreadyOn = false;
let hasRestarted = false;

const circle = document.querySelector(".progress");
const text = document.getElementById("timeDisplay");

const radius = 45;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

function setProgress(time) {
  const offset = circumference * (1 - time / totalTime);
  circle.style.strokeDashoffset = -offset; // Impostiamo il valore negativo per la rotazione oraria
}

function updateTimer() {
  if (timeLeft <= 0) {
    // text.textContent = "0";
    text.innerHTML = `<p class="spanSeconds">SECONDS</br><span class="spanNumber">0</span></br>REMANING</p>`;

    const answers = document.getElementsByClassName("Risposta");

    for (let i = 0; i < answers.length; i++) {
      if (answers[i].innerText === questions[index - 1].correct_answer) {
        answers[i].classList.add("correct");
      } else {
        answers[i].classList.add("incorrect");
      }
    }

    setTimeout(changeQuestion(0), 3000);
    return;
  }

  setProgress(timeLeft);
  // text.textContent = timeLeft;
  text.innerHTML = `<p class="spanSeconds">SECONDS</br><span class="spanNumber">${timeLeft}</span></br>REMANING</p>`;
  timeLeft--;

  if (!isTimerAlreadyOn) {
    setTimeout(updateTimer, 1000);
  }

  isTimerAlreadyOn = false;
}

updateTimer();

// Bench Mark

// const questionsTotal = url("http://bit.ly/strive_QUIZZ");
// const questionsTotal = [
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "What does CPU stand for?",
//     correct_answer: "Central Processing Unit",
//     incorrect_answers: [
//       "Central Process Unit",
//       "Computer Personal Unit",
//       "Central Processor Unit",
//     ],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
//     correct_answer: "Final",
//     incorrect_answers: ["Static", "Private", "Public"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question: "The logo for Snapchat is a Bell.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "easy",
//     question:
//       "Pointers were not used in the original C programming language; they were added later on in C++.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "What is the most preferred image format used for logos in the Wikimedia database?",
//     correct_answer: ".svg",
//     incorrect_answers: [".png", ".jpeg", ".gif"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "In web design, what does CSS stand for?",
//     correct_answer: "Cascading Style Sheet",
//     incorrect_answers: [
//       "Counter Strike: Source",
//       "Corrective Style Sheet",
//       "Computer Style Sheet",
//     ],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question:
//       "What is the code name for the mobile operating system Android 7.0?",
//     correct_answer: "Nougat",
//     incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "easy",
//     question: "On Twitter, what is the character limit for a Tweet?",
//     correct_answer: "140",
//     incorrect_answers: ["120", "160", "100"],
//   },
//   {
//     category: "Science: Computers",
//     type: "boolean",
//     difficulty: "medium",
//     question: "Linux was first created as an alternative to Windows XP.",
//     correct_answer: "False",
//     incorrect_answers: ["True"],
//   },
//   {
//     category: "Science: Computers",
//     type: "multiple",
//     difficulty: "medium",
//     question:
//       "Which programming language shares its name with an island in Indonesia?",
//     correct_answer: "Java",
//     incorrect_answers: ["Python", "C", "Jakarta"],
//   },
// ];

const difficulty = window.localStorage.getItem("difficulty");
const numberQuestions = window.localStorage.getItem("numberQuestions");

let questions;
let index = 0;
let numberCorrectAnswers = 0;

const changeQuestion = (e) => {
  const answers = document.getElementsByClassName("Risposta");

  if (e !== 0) {
    if (e.target.innerText === `${questions[index - 1].correct_answer}`) {
      numberCorrectAnswers++;
      e.target.classList.add("correct");
    } else {
      e.target.classList.add("incorrect");

      // Evidenzia anche la risposta corretta
      for (let i = 0; i < answers.length; i++) {
        if (answers[i].innerText === questions[index - 1].correct_answer) {
          answers[i].classList.add("correct");
          break;
        }
      }
    }
  }
  setTimeout(() => {
    // Ripristina stile dei bottoni
    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.remove("correct", "incorrect");
      answers[i].style.pointerEvents = "auto";
    }
    if (index < questions.length) {
      timeLeft = totalTime;
      if (e !== 0) {
        isTimerAlreadyOn = true;
      }

      updateTimer();
      writeQA();
    } else {
      window.localStorage.setItem("totalNumberQuestions", questions.length);
      window.localStorage.setItem("numberCorrectAnswers", numberCorrectAnswers);
      window.location.href = "index3.html";
    }
  }, 2000);
};

const writeQA = () => {
  console.log("questionsQA", questions);

  const main = document.getElementsByTagName("main")[0];
  main.style.display = "block";

  const h1 = document.getElementsByTagName("h1")[0];
  const answers = document.getElementsByClassName("Risposta");

  if (index === 0) {
    const h2 = document.querySelector("footer h2");
    h2.innerText = `QUESTION ${index + 1} `;
    h2.innerHTML += `<span>/ ${questions.length}</span>`;
  }

  let allTheAnswers = [];
  allTheAnswers.push(questions[index].correct_answer);

  for (let k = 0; k < questions[index].incorrect_answers.length; k++) {
    allTheAnswers.push(questions[index].incorrect_answers[k]);
  }
  allTheAnswers.sort();

  for (let i = 0; i < allTheAnswers.length; i++) {
    answers[i].innerText = allTheAnswers[i];
  }

  if (allTheAnswers.length < answers.length) {
    for (
      let i = answers.length - allTheAnswers.length;
      i < answers.length;
      i++
    ) {
      console.log(`answers[${i}].parentElement`, answers[i].parentElement);
      answers[i].parentElement.style.visibility = "hidden";
    }
  } else {
    for (let i = 2; i < answers.length; i++) {
      answers[i].parentElement.style.visibility = "visible";
    }
  }

  h1.innerText = questions[index].question;

  const h2 = document.querySelector("footer h2");
  h2.innerText = `QUESTION ${index + 1} `;
  h2.innerHTML += `<span>/ ${questions.length}</span>`;

  index++;
};

const fetchQuestions = async function () {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${numberQuestions}&category=20&difficulty=${difficulty}`
  );
  const json = await response.json();
  questions = json.results;
  writeQA();
};

fetchQuestions();

// Vediamo...
// L'idea sarebbe che al click di un div, cambiano le domande.
// Io farei un ciclo for, dove prendo domanda per domanda, metto la questione nell'h1

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

/* - Ciclo for > no, niente ciclo for: fuori tieni il conto dell'index in cui sei
- h1 > metti la domanda
- mettere insieme le answers, fargli sort così non succede che la risposta corretta è sempre alla fine
- usare innerText per riempire i div
E questo per riempire i cosi.

Ricordati di tenere conto delle risposte giuste.

Poi c'è da pensare quando la persona clicca una delle risposte: deve cambiare innerText. Andiamo con ordine, però.

Ok, adesso quando la persona clicca la risposta > Allora, l'idea sarebbe che qualsiasi risposta clicco va avanti;
Però devo segnare quali sono le risposte corrette, quello più che altro.

Questa cosa lo faccio in changeQuestion. 

*/

let index = 0;
let numberCorrectAnswers = 0;

const changeQuestion = (e) => {
  console.log("e.target", e.target);
  if (e.target.innerText === `${questions[index - 1].correct_answer}`) {
    numberCorrectAnswers++;
  }
  console.log("number correct answers: " + numberCorrectAnswers);
  if (index < questions.length) {
    writeQA(e);
  } else {
    window.location.href = "index3.html";
  }
};

const writeQA = () => {
  const h1 = document.getElementsByTagName("h1")[0];
  const answers = document.getElementsByClassName("answers");

  let allTheAnswers = [];
  allTheAnswers.push(questions[index].correct_answer);
  console.log(
    "questions[index].incorrect_answers.length",
    questions[index].incorrect_answers
  );
  for (let k = 0; k < questions[index].incorrect_answers.length; k++) {
    allTheAnswers.push(questions[index].incorrect_answers[k]);
  }
  allTheAnswers.sort();
  console.log("allTheAnswers", allTheAnswers);

  for (let i = 0; i < allTheAnswers.length; i++) {
    answers[i].innerText = allTheAnswers[i];
    // answers[i].addEventListener("click", changeQuestion());
  }

  if (allTheAnswers.length < answers.length) {
    for (let i = 2; i < answers.length; i++) {
      answers[i].innerText = "";
      answers[i].classList.add("hide");
      // Creare classe hide
    }
  }

  h1.innerText = questions[index].question;

  index++;
};

writeQA();

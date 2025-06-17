let currentQuestion = 1;
const totalQuestions = 10;

const getQuestionNumberPlace = document.getElementBytag("h2");

// VEDIAMO come refreshare il display //
const updateQuestionNumberDisplay = function () {
  if (getQuestionNumberPlace) {
    getQuestionNumberPlace.textContent = `QUESTION ${currentQuestion}/${totalQuestions}`; //
  }
};

// Refresh al caricamento della pagina //
document.addEventListener("DOMContentLoaded", () => {
  updateQuestionNumberDisplay();
});

//
const timerResetAndNewQuestion = function () {
  console.log("Timer reset, loading new question...");
  // Per andare alla prossima domanda //
  currentQuestion++;
  if (currentQuestion <= totalQuestions) {
    updateQuestionNumberDisplay();
    // Nuova domanda //
  } else {
    window.location.href = "index3.html";
  }
};

setTimeout(timerResetAndNewQuestion, 6000);

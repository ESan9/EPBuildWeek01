const agreementTerms = document.getElementById("promiseT");
const proceedBttn = document.getElementById("proceedBttn");

// STATO PULSANTE //

const updateButtonState = function () {
  // Il pulsante è disabilitato se il checkbox non è selezionato //
  proceedBttn.disabled = !agreementTerms.checked;
};

// Listener al checkbox per reagire ai cambiamenti E aggiornare lo stile //
agreementTerms.addEventListener("change", function () {
  // Aggiorna lo stato del pulsante (abilitato/disabilitato)
  updateButtonState();
});

// Listener per il pulsante //
proceedBttn.addEventListener("click", function (e) {
  e.preventDefault();

  const difficultyChoices = document.querySelectorAll("#difficulty input");
  let difficulty;

  const numberQuestions = document.getElementById("numberQuestions").value;
  window.localStorage.setItem("numberQuestions", numberQuestions);

  for (let i = 0; i < difficultyChoices.length; i++) {
    if (difficultyChoices[i].checked) {
      difficulty = difficultyChoices[i].value;
    }
  }

  window.localStorage.setItem("difficulty", difficulty);

  if (!difficulty) {
    alert("Select the level of difficulty");
  }

  if (!(numberQuestions > 0 && numberQuestions < 21)) {
    alert("Choose the number of questions you would like to answer");
  }

  if (
    agreementTerms.checked &&
    difficulty &&
    numberQuestions > 0 &&
    numberQuestions < 21
  ) {
    window.location.href = "index2.html";
  }
});

// Chiamata iniziale per impostare lo stato e lo stile del pulsante e del checkbox al caricamento della pagina //
updateButtonState();

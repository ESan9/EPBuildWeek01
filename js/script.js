const agreementTerms = document.getElementById("promiseT");
const proceedBttn = document.getElementById("proceedBttn");

// STATO PULSANTE //
const updateButtonState = function () {
  // Il pulsante è disabilitato se il checkbox NON è selezionato //
  proceedBttn.disabled = !agreementTerms.checked;
};

// Listener al checkbox per reagire ai cambiamenti E aggiornare lo stile //
agreementTerms.addEventListener("change", function () {
  // Aggiorna lo stato del pulsante (abilitato/disabilitato)
  updateButtonState();
});

// Listener per il pulsante //
proceedBttn.addEventListener("click", function () {
  if (agreementTerms.checked) {
    window.location.href = "index2.html";
  }
});

// Chiamata iniziale per impostare lo stato e lo stile del pulsante e del checkbox al caricamento della pagina //
updateButtonState();

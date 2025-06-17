const myForm = document.getElementById("proceed");
myForm.addEventListener("submit", (e) => {
  // Intervengo sul comportamento di default
  e.preventDefault();
  console.log("Il form è stato inviato");

  const checkInput = document.getElementById("check");
  const savedCheckTask = checkInput.value;

  console.log("Dati raccolti: ", savedCheckTask);

  //  Al momento che il form viene inviato e quindi cliccando sul bottone mi porterà direttamente alla prossima pagina
  window.location.href = "index2.html";

  myForm.reset();
});

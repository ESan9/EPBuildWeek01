const colorStar = document.getElementsByClassName("star-color");
const light = [];
for (let i = 0; i < colorStar.length; i++) {
  light[i] = false;
}
for (let i = 0; i < colorStar.length; i++) {
  colorStar[i].addEventListener("mouseenter", function (e) {
    let ind = e.target.getAttribute("data-index");

    for (let i = 0; i < colorStar.length; i++) {
      const index = parseInt(ind);
      for (let j = 0; j < index; j++) {
        colorStar[j].style.opacity = "1";
      }
    }
  });
}

const shut = function () {
  for (let j = 0; j < colorStar.length; j++) {
    colorStar[j].style.opacity = "0";
  }
};

const shutIf = function () {
  for (let j = 0; j < colorStar.length; j++) {
    if (light[j] === false) {
      colorStar[j].style.opacity = "0";
    }
  }
};

for (let i = 0; i < colorStar.length; i++) {
  colorStar[i].addEventListener("mouseleave", shut);
}

const rate = function (e) {
  let ind = e.target.getAttribute("data-index");
  const index = parseInt(ind);

  if (light[index - 1] === false) {
    for (let i = 0; i < colorStar.length; i++) {
      for (let j = 0; j < index; j++) {
        colorStar[j].style.opacity = "1";
        light[j] = true;
      }
    }

    for (let i = 0; i < colorStar.length; i++) {
      colorStar[i].removeEventListener("mouseleave", shut);
    }
    for (let i = index; i < colorStar.length; i++) {
      colorStar[i].addEventListener("mouseleave", shutIf);
    }
  } else {
    for (let i = 0; i < colorStar.length; i++) {
      colorStar[i].removeEventListener("mouseleave", shutIf);
    }
    for (let i = 0; i < colorStar.length; i++) {
      colorStar[i].addEventListener("mouseleave", shut);
    }
    for (let i = 0; i < colorStar.length; i++) {
      light[i] = false;
    }
  }
};

for (let i = 0; i < colorStar.length; i++) {
  colorStar[i].addEventListener("click", rate);
}

const infoButton = document.getElementById("info");

infoButton.addEventListener("mouseover", () => {
  infoButton.style.cursor = "pointer";
});

infoButton.addEventListener("click", function () {
  window.location.href = "https://www.epicode.com";
  const text = document.getElementById("text");
  text.value = "";
});

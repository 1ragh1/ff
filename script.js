function upDate(previewPic) {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.textContent = previewPic.alt;
}

function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent =
    "Hover over or focus on an image below to display it here.";
}

function addTabFocus() {
  console.log("Tabindex added to all figures");
  const figures = document.querySelectorAll(".gallery figure");

  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");
  }
}

window.onload = function () {
  addTabFocus();

  const figures = document.querySelectorAll(".gallery figure");

  for (let i = 0; i < figures.length; i++) {
    const img = figures[i].querySelector("img");

    figures[i].addEventListener("mouseover", function () {
      upDate(img);
    });

    figures[i].addEventListener("mouseleave", function () {
      unDo();
    });

    figures[i].addEventListener("focus", function () {
      upDate(img);
    });

    figures[i].addEventListener("blur", function () {
      unDo();
    });
  }
};
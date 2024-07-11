var favBtn = document.getElementById("favBtn");

favBtn.addEventListener("click", () => {
  var heartImg = document.getElementById("heartImg");
  var heartImgUrl = heartImg.src;

  if (heartImgUrl.includes("blackHeart")) {
    heartImg.src = "./Resources/redHeart.svg";

  } else {
    heartImg.src = "./Resources/blackHeart.svg";
  }

});

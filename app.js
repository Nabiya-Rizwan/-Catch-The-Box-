let box = document.getElementById("box");
let scoreText = document.getElementById("score");
let area = document.querySelector(".bdr");

let score = 0;

box.addEventListener("click", function () {
  score++;
  scoreText.innerText = score;

  let maxX = area.clientWidth - box.clientWidth;
  let maxY = area.clientHeight - box.clientHeight;

  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  box.style.left = x + "px";
  box.style.top = y + "px";
});

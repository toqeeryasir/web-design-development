let arr = [];
let hit;
let score = 0;
function generate_circles() {
  arr = [];
  let rand;
  for (let i = 1; i <= 25; i++) {
    let circle = document.querySelector(`.circle${i}`);
    rand = Math.floor(Math.random() * 25) + 1;
    arr.push(rand);
    circle.textContent = rand;
  }
  let random_index = Math.floor(Math.random() * 25);
  hit = arr[random_index];
  document.querySelector(".hit").textContent = `Hit: ${hit}`;
}
function clicked(num) {
  if (hit == arr[num - 1]) {
    document.querySelector(".score").textContent = `Score: ${(score += 10)}`;
  }
  generate_circles();
}
generate_circles();

function count_down() {
  let time = 59;
  let id = setInterval(() => {
    document.querySelector(".time").textContent = `Time: ${time}`;
    time--;
    if (time < 0) {
      clearInterval(id);
      alert("Time up!");
    }
  }, 1000);
}
count_down();

// immediate invoked function expression
let arrayIndex = 0;

const imageDIV = document.querySelector(".img-container");

const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];

//move Pic Left
function movePicLeft() {
  arrayIndex--;
  if (arrayIndex < 0) {
    arrayIndex = pictures.length - 1;
  }
  imageDIV.style.backgroundImage = `url('./img/${pictures[arrayIndex]}.jpeg')`;
}

//Move Pic Right
function movePicRight() {
  arrayIndex++;
  if (arrayIndex > pictures.length - 1) {
    arrayIndex = 0;
  }
  imageDIV.style.backgroundImage = `url('./img/${pictures[arrayIndex]}.jpeg')`;
}

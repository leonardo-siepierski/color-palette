function pixelLine() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let i = 0; i < 5; i += 1) {
    const square = document.createElement('div');
    square.classList.add('pixel');
    pixelBoard.appendChild(square);
  }
}

function createBoard() {
  for (let i = 0; i < 5; i += 1) {
    pixelLine();
  }
}

function selectedColor(e) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  e.target.classList.add('selected');
}

function paintPixel(e) {
  const selectedClass = document.querySelector('.selected');
  e.target.style.backgroundColor = window.getComputedStyle(selectedClass).backgroundColor;
}

window.onload = () => {
  createBoard();
  const pixels = document.getElementsByClassName('pixel');

  const colorBlack = document.querySelector('#first');
  const colorRed = document.querySelector('#second');
  const colorGreen = document.querySelector('#third');
  const colorBlue = document.querySelector('#fourth');

  colorBlack.addEventListener('click', selectedColor);
  colorGreen.addEventListener('click', selectedColor);
  colorRed.addEventListener('click', selectedColor);
  colorBlue.addEventListener('click', selectedColor);

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintPixel);
  }

  const eraseButton = document.getElementById('clear-board');

  function clearBoard() {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  }

  eraseButton.addEventListener('click', clearBoard);
};

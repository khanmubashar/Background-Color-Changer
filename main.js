const btn = document.getElementById('changecolorbtn');

btn.addEventListener('click', changeColor);

function changeColor() {
  const colorText = document.querySelector('.colorcontainer_colortitle');
  const backgroundColor = document.querySelector('.colorcontainer');
  backgroundColor.style.background = getRandomColor();
  colorText.innerText = getRandomColor();
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function divide(a, b) {
  return a / b;
}

//generate random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
let intervalId;

start.addEventListener("click", function () {
  if (!intervalId) {
    intervalId = setInterval(changingBg, 1000);
  }
  function changingBg() {
    document.body.style.backgroundColor = randomColor();
  }
});

stop.addEventListener("click", function () {
  clearInterval(intervalId);
  intervalId = null;
});

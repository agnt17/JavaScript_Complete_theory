// we will first writ function to change the color on clicking

function color_changing() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalId;
function change_color(){
    document.body.style.backgroundColor = color_changing();
}
function startChangingColor(){
     intervalId = setInterval(change_color, 1000);
}
const start = document.querySelector('#Start');
start.addEventListener('click', startChangingColor);

const stop = document.querySelector('#Stop');
stop.addEventListener('click', stop_color_changing);

function stop_color_changing(){
    clearInterval(intervalId);
    intervalId = null;
}

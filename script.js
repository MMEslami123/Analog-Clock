const second = document.querySelector(".second-rotate");
const minute = document.querySelector(".minute-rotate");
const hour = document.querySelector(".hour-rotate");
setInterval(timeHandler, 1000);
function timeHandler() {
  let getTime = new Date();
  let myHour = getTime.getHours() * 30;
  let myMin = getTime.getMinutes() * 6;
  let mySec = getTime.getSeconds() * 6;
  second.style.transform = `rotate(${mySec}deg)`;
  minute.style.transform = `rotate(${myMin}deg)`;
  hour.style.transform = `rotate(${myHour + myMin / 12}deg)`;
}

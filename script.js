const secondsHand = document.querySelector('.second-hand');
const minutssHand = document.querySelector('.minute-hand');
const hourssHand = document.querySelector('.hour-hand');


const setTime = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secDegr = ((seconds / 60) * 360);
  const minDegr = ((minutes / 60) * 360);
  const hourDegr = ((hours / 60) * 360);

  secondsHand.style.transform = `rotate(${secDegr}deg)`;
  minutssHand.style.transform = `rotate(${minDegr}deg)`;
  hourssHand.style.transform = `rotate(${hourDegr}deg)`;
};

setInterval(setTime, 1000);

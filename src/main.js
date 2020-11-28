const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

setInterval(getTime, 1000);

function getTime() {

  const timeNow = new Date();
  const handLocationSeconds = timeNow.getSeconds() / 60;
  const handLocationMinutes = (handLocationSeconds + timeNow.getMinutes()) / 60;
  const handLocationHours = (handLocationMinutes + timeNow.getHours()) / 12;
  displayHands(secondHand, handLocationSeconds);
  displayHands(minuteHand, handLocationMinutes);
  displayHands(hourHand, handLocationHours);
}

function displayHands(hand, location) {
  hand.style.setProperty('--rotation', location * 360);
}
// // Functionality for the digital clock start with getting the hours, minutes, and seconds
// let currentTime = new Date();
// let currentSeconds = currentTime.getSeconds();
// let currentMinutes = currentTime.getMinutes();
// let currentHours = currentTime.getHours();

// // Selecting the elements for the left hour
// const leftHourTopTop = document.querySelector('.clock-digital__container--hours-left .unit-top-top');
// const leftHourTopRight = document.querySelector('.clock-digital__container--hours-left .unit-top-right');
// const leftHourMiddle = document.querySelector('.clock-digital__container--hours-left .unit-middle');
// const leftHourTopLeft = document.querySelector('.clock-digital__container--hours-left .unit-top-left');
// const leftHourBottomRight = document.querySelector('.clock-digital__container--hours-left .unit-bottom-right');
// const leftHourBottomBottom = document.querySelector('.clock-digital__container--hours-left .unit-bottom-bottom');
// const leftHourBottomLeft = document.querySelector('.clock-digital__container--hours-left .unit-bottom-left');

// // Selecting the elements for the right hour

// // Selecting the elements for the colon characters and make them blink every second
// const colonTop = document.querySelector('.clock-digital__container--colon .unit-top-top');
// const colonBottom = document.querySelector('.clock-digital__container--colon .unit-bottom-bottom');

// setInterval(secondCount, 1000);

// function secondCount() {
//   colonTop.classList.remove('hidden')
//   setTimeout(hideColon, 500);
//   colonBottom.classList.remove('hidden')
//   setTimeout(hideColon, 500);
// }

// function hideColon() {
//   colonTop.classList.add('hidden');
//   colonBottom.classList.add('hidden');
// }

// // Selecting the elements for the left minute
// // Selecting the elements for the right minute

// const btn = document.querySelector('.button');

// btn.addEventListener('click', () => {
//   leftHourTopTop.classList.toggle('hidden');
//   leftHourTopRight.classList.toggle('hidden');
//   leftHourMiddle.classList.toggle('hidden');
//   leftHourTopLeft.classList.toggle('hidden');
//   leftHourBottomRight.classList.toggle('hidden');
//   leftHourBottomBottom.classList.toggle('hidden');
//   leftHourBottomLeft.classList.toggle('hidden');
// });


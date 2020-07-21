// Array for all the digits
const digits = {
  digits: [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ],
};

// // Get time container
// const time = document.querySelector(".time");

// const positions = ["h1", "h2", ":", "m1", "m2"];

// get hour digits
const hour = document.querySelector(".hour, .hour2");

// get minute digits
const minute = document.querySelector(".minute, .minute2");

// get current time
function setDate() {
  const now = new Date();

  // display correct number class depending on the time
  const minutes = now.getMinutes();
  // const minutesNumbers = now.digits[]

  // display correct number class depending on the time
  const hours = now.getHours();
  // const hourNumbers = (hours / 12) * 360 + 90;

  console.log(hours, minutes);
}

setInterval(setDate, 1000);

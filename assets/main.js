// Aufgabe 1
console.log("Start Warten für 3 Sekunden ...");

setTimeout(() => {
  console.log("Erledigt. du hast 3 Sekunden gewartet!!!!!!! ");
}, 3000);

// Aufgabe 2
let countdownValue = 100;
let countdownInterval;

function startCountdown() {
  if (!countdownInterval) {
    countdownInterval = setInterval(function () {
      countdownValue--;

      document.getElementById("countdown").innerText = countdownValue + "%";

      if (countdownValue <= 0) {
        clearInterval(countdownInterval);
        countdownInterval = null;
      }
    }, 100);
  }
}
// Aufgabe 3
function countdown() {
  let countElement = document.getElementById("count");
  let count = parseInt(countElement.innerText);

  if (count > 0) {
    count--;
    countElement.innerText = count;
  } else {
    let messageElement = document.querySelector(".message");
    messageElement.innerHTML = "<p>Die Meldung ist verschwunden!</p>";
    clearInterval(intervalId);
  }
}

let intervalId = setInterval(countdown, 1000);

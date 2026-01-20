let pomodoroDuration = 25 * 60;
let breakDuration = 5 * 60;
let isPomodoro = true;
let timerId;

function startPomodoro() {
let duration = isPomodoro ? pomodoroDuration : breakDuration;
timerId = setInterval(() => {
if (duration === 0) {
clearInterval(timerId);
isPomodoro = !isPomodoro;
alert(isPomodoro ? "Time for a break!" : "Back to work!");
startPomodoro();
} else {
duration--;
displayTime(duration);
}
}, 1000);
}

function displayTime(seconds) {
const minutes = Math.floor(seconds / 60);
const remainingSeconds = seconds % 60;
const timerElement = document.getElementById('timer-display');
timerElement.textContent = `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function resetPomodoro() {
clearInterval(timerId);
isPomodoro = true;
pomodoroDuration = 25 * 60;
displayTime(pomodoroDuration);
}

function customizePomodoro(newDuration) {
pomodoroDuration = newDuration * 60;
displayTime(pomodoroDuration);
}
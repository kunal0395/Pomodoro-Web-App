let timer;
let minutes = 25;
let seconds = 0;
let isPaused = false;
let selectedMode = 'pomodoro';

function startTimer() {
  clearInterval(timer);
  updateTimerDisplay();
  timer = setInterval(updateTimer, 1000);
  document.getElementById('startButton').style.display = 'none'; 
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timer);
    alert('Time is up! Take a break.');
  } else if (!isPaused) {
    if (seconds > 0) {
      seconds--;
    } else {
      seconds = 59;
      minutes--;
    }
    updateTimerDisplay();
    updateProgressCircle(); 
  }
}

function updateTimerDisplay() {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = formatTime(minutes, seconds);
}

function formatTime(minutes, seconds) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function togglePauseResume() {
  isPaused = !isPaused;
}

function resetTimer(mode) {
  clearInterval(timer);
  selectedMode = mode; 
  if (mode === 'shortBreak') {
    minutes = 5;
  } else if (mode === 'longBreak') {
    minutes = 15;
  } else {
    minutes = 25;
  }
  seconds = 0;
  updateTimerDisplay();
  isPaused = false;
  document.getElementById('startButton').style.display = 'block'; 
}

function chooseTime() {
  const newTime = prompt('Enter new time in minutes:');
  if (!isNaN(newTime) && newTime > 0) {
    minutes = parseInt(newTime);
    seconds = 0;
    updateTimerDisplay();
    clearInterval(timer);
    isPaused = false;
    document.getElementById('startButton').style.display = 'block';
  } else {
    alert('Invalid input. Please enter a valid number greater than 0.');
  }
}

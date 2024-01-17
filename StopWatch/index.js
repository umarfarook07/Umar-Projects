let isRunning = false;
let intervalId;
let totalMilliseconds = 0;
let lapCount = 1;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(updateTime, 100);
        document.querySelector('.start-btn').innerText = 'Stop';
    } else {
        isRunning = false;
        clearInterval(intervalId);
        document.querySelector('.start-btn').innerText = 'Start';
    }
}

function stopStopwatch() {
    isRunning = false;
    clearInterval(intervalId);
    document.querySelector('.start-btn').innerText = 'Start';
}

function resetStopwatch() {
    stopStopwatch();
    totalMilliseconds = 0;
    lapCount = 1;
    updateTime();
    document.querySelector('.lap-times').innerHTML = '';
}

function recordLap() {
    const lapTime = formatTime(totalMilliseconds);
    const lapItem = document.createElement('li');
    lapItem.innerText = `Lap ${lapCount}: ${lapTime}`;
    document.querySelector('.lap-times').appendChild(lapItem);
    lapCount++;
}

function updateTime() {
    let hours = Math.floor(totalMilliseconds / 3600000);
    let minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
    let seconds = Math.floor((totalMilliseconds % 60000) / 1000);
    let milliseconds = totalMilliseconds % 1000;

    document.querySelector('.hour').innerText = padZero(hours, 2);
    document.querySelector('.minutes').innerText = padZero(minutes, 2);
    document.querySelector('.seconds').innerText = padZero(seconds, 2);
    document.querySelector('.milliseconds').innerText = padZero(milliseconds, 3);

    totalMilliseconds += 100;
}

function padZero(number, length) {
    return String(number).padStart(length, '0');
}

function formatTime(milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds % 3600000) / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    let millisecondsPart = milliseconds % 1000;

    return `${padZero(hours, 2)}:${padZero(minutes, 2)}:${padZero(seconds, 2)}.${padZero(millisecondsPart, 3)}`;
}

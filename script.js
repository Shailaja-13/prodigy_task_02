let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerText =
        h + ":" + m + ":" + s;
}

function startStopwatch() {
    if (timer) return;

    timer = setInterval(function () {
        seconds++;

        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 1000);
}

function pauseStopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetStopwatch() {
    clearInterval(timer);

    timer = null;
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    document.getElementById("laps").innerHTML = "";
}

function lapTime() {
    let currentTime = document.getElementById("display").innerText;

    let li = document.createElement("li");
    li.innerText = "Lap: " + currentTime;

    document.getElementById("laps").appendChild(li);
}
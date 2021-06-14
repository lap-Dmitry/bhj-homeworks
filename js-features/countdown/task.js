const time = document.getElementById('timer');
let countCurrent = time.textContent;
let intervals = null;

let interval = () => intervals = setInterval(count, 1000);

function count() {
    if(countCurrent > 0) {
        countCurrent--;
        let currentTime = getCurrentTime(countCurrent);
        time.textContent = currentTime;
    }else {
        alert('Вы победили в конкурсе');
        clearInterval(intervals);
    }
}

function getCurrentTime(elem) {
    const today = new Date(elem * 1000);
    const seconds = today.getUTCSeconds() < 10 ? `0${today.getUTCSeconds()}` : `${today.getUTCSeconds()}`;

    return `${seconds}`;
}

interval()
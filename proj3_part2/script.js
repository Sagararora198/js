let currenttime;
let hours;
let minutes;
let seconds;
let clock;
clock = document.getElementById('clock')

setInterval(() => {
    currenttime = new Date();
    hours = currenttime.getHours();
    minutes = currenttime.getMinutes();
    seconds = currenttime.getSeconds();
    if (seconds<10) {
        seconds = '0' + seconds;
    }
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    
}, 1000);
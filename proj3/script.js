let date ;
let clock = document.querySelector(".container");
let dates;
let time;

let second;


setInterval(() => {
    
    date = new Date();
    second = date.getSeconds();
    if (second<10) {
        second = '0' + second;
    }
    time = `${date.getHours()}  :  ${date.getMinutes()}  :  ${second}`;
    dates = date.toLocaleDateString();

    clock.innerHTML = time + "\n" + dates;


}, 1000);
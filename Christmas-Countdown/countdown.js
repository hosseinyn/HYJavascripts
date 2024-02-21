const current_year = document.getElementById('Year');
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const next_year = document.getElementById('next-year');

let date = new Date();
let year = date.getFullYear();
let next = year + 1;

current_year.textContent = year;
next_year.textContent = next;

let endDate = new Date(year, 12, 25);
let endTime = endDate.getTime();

let oneDay = 24 * 60 * 60 * 1000;
let oneHr = 60 * 60 * 1000;
let oneMin = 60 * 1000;

function countdown() {
    let today = new Date();
    let todayTime = today.getTime();
    let remainingTime = endTime - todayTime;

    let zero = (num) => (num < 10 ? `0${num}` : num);

    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    day.textContent = zero(daysLeft);
    hour.textContent = zero(hrsLeft);
    minute.textContent = zero(minsLeft);
    second.textContent = zero(secsLeft);
}

countdown();

let live = setInterval(countdown, 1000);


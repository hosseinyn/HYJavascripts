const mode = document.getElementById('mode');
const mode2 = document.getElementById('mode2');
const hour = document.getElementById('Hour');
const minute = document.getElementById('Minute');
const second = document.getElementById('Second');

function clock() {
    let date = new Date();
    let hours = date.getHours();
    hour.textContent = hours;
    minute.textContent = date.getMinutes();
    second.textContent = date.getSeconds();

    if (hours < 12) {
        mode.textContent = 'Morning :)';
        mode2.textContent = 'AM';
    } else if (hours === 12) {
        mode.textContent = 'Noon :)';
        mode2.textContent = 'PM';
    } else if (hours < 18) {
        mode.textContent = 'Afternoon :)';
        mode2.textContent = 'PM';
    } else if (hours < 20) {
        mode.textContent = 'Evening :)';
        mode2.textContent = 'PM';
    } else {
        mode.textContent = 'Night :)';
        mode2.textContent = 'Night';
    }

    if (mode2.textContent == 'AM') {
        document.body.style.backgroundImage = `url('Assest/background2.jpg')`;
    } else {
        document.body.style.backgroundImage = `url('Assest/background.jpg')`;
    }
}

setInterval(clock, 1000);

clock();

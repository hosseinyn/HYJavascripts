
// Selectors
const weather_box = document.getElementById("weather");
const result_box = document.getElementById("result");
const image_mode = document.getElementById("image");
const deg_text = document.getElementById("deg");
const mode_text = document.getElementById("mode");
const city_input = document.getElementById("city-name");
const speed = document.getElementById("speed");

// Start

const searchWeather = () => {
    city_name = city_input.value
    if(city_name == ''){
        swal("Please Enter The City!", "You don't enter the city name :/ ", "error");
        return;
    }
    let api_key = "" // Your API Key
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${api_key}`
    weather_box.style.width = "400px";
    weather_box.style.height = "450px";
    weather_box.style.margin = "50px";
    result_box.style.display = "flex";
    fetch(url)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {
                swal("City Not Found!", "Sorry, City Not Found In The Server ", "error");
                return;
            }

            switch (json.weather[0].main) {
                case 'Clear':
                    image_mode.src = 'Assest/clear.png';
                    break;

                case 'Rain':
                    image_mode.src = 'Assest/rain.png';
                    break;

                case 'Snow':
                    image_mode.src = 'Assest/snow.png';
                    break;

                case 'Clouds':
                    image_mode.src = 'Assest/cloud.png';
                    break;

                case 'Haze':
                    image_mode.src = 'Assest/haze.png';
                    break;

                default:
                    image_mode.src = '';
            }

            deg_text.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            mode_text.innerHTML = `${json.weather[0].description}`;
            speed.innerHTML = `<i class="fa-solid fa-wind"></i> ${parseInt(json.wind.speed)}Km/h`;

        })
    }


document.onkeypress = function(key){
    if(key.key == "Enter"){
        searchWeather()
    }
}


    function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `Last updated ${day},${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return days[day];
}

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col-2">
        <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
        <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> ${Math.round(forecastDay.temp.max)}° </span>
          <span class="weather-forecast-temperature-min"> ${Math.round(forecastDay.temp.min)}° </span>
        </div>
      </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
let dateElement = document.querySelector("h3");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

    function searchCity(event) {
            event.preventDefault();
            let city = document.querySelector("#search-city-input").value;
            showCity(city);
    }

    let searchForm = document.querySelector("#search-city");
        searchForm.addEventListener("submit", searchCity);

    function showCity(city) {
        
            let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16d9fc42d39c76663ac8f35eeafa30a4&units=metric`;
            axios.get(apiUrl).then(weatherToday);

    }

    function weatherToday(response) {
            let iconElement = document.querySelector("#icon");
            
            document.querySelector("h1").innerHTML = response.data.name;
            document.querySelector("#todays-temp").innerHTML = Math.round(response.data.main.temp) + "°C";
            document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed) + " km/h";
            document.querySelector("#description").innerHTML = (response.data.weather[0].main);
            document.querySelector("#humidity").innerHTML = Math.round(response.data.main.humidity) + "%";
            
           iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
           iconElement.setAttribute("alt", response.data.weather[0].description);
        }

 

            


    
    

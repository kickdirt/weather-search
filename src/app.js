
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
            document.querySelector("h1").innerHTML = response.data.name;
            document.querySelector("#todays-temp").innerHTML = Math.round(response.data.main.temp) + "°C";
            document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed) + " km/h";
            document.querySelector("#description").innerHTML = (response.data.weather[0].main);
            document.querySelector("#humidity").innerHTML = Math.round(response.data.main.humidity) + "%";
    }

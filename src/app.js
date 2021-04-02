  let now = new Date();

            let h3 = document.querySelector("h3");

            let hours = now.getHours();
            let minutes = now.getMinutes();
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let day = days[now.getDay()];

            h3.innerHTML = `It's ${day}, ${hours}:${minutes}`;


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
            document.querySelector("#todays-temp").innerHTML = Math.round(response.data.main.temp);
    }

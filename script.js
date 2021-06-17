// GIVEN a weather dashboard with "form inputs"
// WHEN I search for a city
    // Search bar for city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
    // Add to local storage

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
    // Use weather API
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

function runWeatherApp(){
    const searchEl = document.querySelector('.submit-button')
    searchEl.addEventListener('click', () => displayWeatherInfo(document.querySelector('.city-input').value));
    console.log(displayCurrentWeather)
}

function displayWeatherInfo(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appId=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial`).then(response => response.json()).then(weatherData => {
        displayCurrentWeather(weatherData);
        displayForecast(weatherData.coord)
    })
}

function displayCurrentWeather(weatherData){
    console.log('Here is the weather data: ', weatherData);
}

function displayForecast(coords){
    const lat = coords.lat;
    const lon = coords.lon;
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial`).then(response => response.json()).then(weatherData => {
        console.log(weatherData);
    })
}

runWeatherApp();

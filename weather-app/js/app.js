const apiKey = '350ee236079ce455f574dc5fa60f1966'; // Replace with your actual API key
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchWeatherData(city);
    } else {
        displayError('Please enter a city name.');
    }
});

function fetchWeatherData(city) {
    fetch(`${weatherApiUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            updateWeatherInfo(data);
        })
        .catch(error => {
            displayError(error.message);
        });
}

function updateWeatherInfo(data) {
    const weatherContainer = document.getElementById('weather-result');
    weatherContainer.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function displayError(message) {
    const weatherContainer = document.getElementById('weather-result');
    weatherContainer.innerHTML = `<p class="error">${message}</p>`;
}
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?&units=metric';
        const apiKey ='a0e9f1cd5b93f4ffe5d46ec1cc0b910a';
        const cityNameInput = document.querySelector('.city-name-input');
        const resultContainer = document.querySelector('.main-section');
        const weatherImage = document.querySelector('.temp-img');
        function getWeather() {
            const cityName = cityNameInput.value;

            if (!cityName) {
                console.error('City name is empty');
                return;
            }
            const requestURL = `${apiURL}&q=${cityName}&appid=${apiKey}`;
            let xhr = new XMLHttpRequest();

            xhr.open('GET', requestURL, true);

            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const responseData = JSON.parse(xhr.responseText);
                    displayWeather(responseData);
                } else {
                    console.error('Request failed with status:', xhr.status);
                    displayError('Failed to fetch weather data');
                }
            };
            xhr.onerror = function() {
                console.error('Network error occurred');
                displayError('Network error');
            };
            xhr.send();
        }
        function displayWeather(data) {
            const temperatureElement = document.querySelector('.temperature');
            const cityNameElement = document.querySelector('.city-name');
            const humidityRateElement = document.querySelector('.humidity-rate');
            const windSpeedRateElement = document.querySelector('.wind-speed-rate');
           temperatureElement.textContent = Math.floor(`${data.main.temp}`) + '°C';
            cityNameElement.textContent = data.name;
            humidityRateElement.textContent = `${data.main.humidity}%`;
            windSpeedRateElement.textContent = `${data.wind.speed} m/s`;
           if (data.weather[0].main == 'Clouds') {
        weatherImage.src = '/images/clouds.png';
    } else if (data.weather[0].main == 'Clear') {
        weatherImage.src = '/images/clear.png';                
    } else if (data.weather[0].main == 'Rain') {
        weatherImage.src = '/images/rain.png';
    } else if (data.weather[0].main == 'Drizzle') {
        weatherImage.src = '/images/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
        weatherImage.src = '/images/mist.png';
    }
        }
        function displayError(message) {           
            resultContainer.innerHTML = `<p>Error: ${message}</p>`;
        }
        const searchButton = document.querySelector('.search-button');
        searchButton.addEventListener('click', getWeather);



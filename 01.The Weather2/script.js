const searchField = document.querySelector(".cityInput")
const searchBtn = document.querySelector(".searchBtn")


const apiCity = 'https://geocoding-api.open-meteo.com/v1/search?name=' + cityInput + '&count=10&language=en&format=json'
const apiTemp = 'https://api.open-meteo.com/v1/forecast?latitude='+data.results[0].latitude+'&longitude='+data.results[0].longitude+'&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto'

fetch(apiCity)
  .then(response => response.json())
  .then(users => {
    // Do something with the users data
  })
  .catch(error => {
    // Handle the error
  });
const getWeatherForecastData = (latitude, longitude) => {
    return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto`)
        .then(response => response.json());
};
getGeocodingData(cityInput)
getWeatherForecastData(latitude,longitude)

// searchBtn.addEventListener('click', function() {
//     getTemperature(searchField.value)
//     })
// searchField.addEventListener('keyup', (event) => {
//     if (event.code === 'Enter') {
//         getTemperature(searchField.value)
//     }
// })
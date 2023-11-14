const searchBtn = document.querySelector(".locationSearchBtn");

const searchField = document.querySelector("#inputLocation");
const todayDiv = document.querySelector(".weatherToday")
const forecastDiv = document.querySelector(".weatherForecast");
const tomorrowDiv = document.querySelector(".tomorrowDiv")
const dayThreeDiv = document.querySelector(".dayThreeDiv")
const dayFourDiv = document.querySelector(".dayFourDiv")
const dayFiveDiv = document.querySelector(".dayFiveDiv")
const daySixDiv = document.querySelector(".daySixDiv")
const daySevenDiv = document.querySelector(".daySevenDiv")

const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekdayName = weekdays[dayOfWeek]



const getTemperature = (cityInput) => {
    console.log (cityInput)
fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + cityInput + '&count=10&language=en&format=json')
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0])
    fetch('https://api.open-meteo.com/v1/forecast?latitude='+data.results[0].latitude+'&longitude='+data.results[0].longitude+'&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto')
    .then(response => response.json())
    .then(data => {
        const dailyMaxTemp = data.daily.temperature_2m_max;
        const dailyMinTem = data.daily.temperature_2m_min;
        const dailyMaxTempToday = data.daily.temperature_2m_max[0];
        const dailyMinTempToday = data.daily.temperature_2m_min[0];
        console.log(dailyMaxTempToday)
        console.log(dailyMinTempToday)
        const maxTempTodayDiv = document.createElement('div')
        const minTempTodayDiv = document.createElement('div')
        maxTempTodayDiv.innerHTML = "The max temperature in "+ cityInput +" today is: " +dailyMaxTempToday+ " °C."
        minTempTodayDiv.innerHTML = "The min temperature in "+ cityInput +" today is: " +dailyMinTempToday+ " °C."
        todayDiv.innerHTML = '';
        todayDiv.appendChild(maxTempTodayDiv);
        todayDiv.appendChild(minTempTodayDiv);
        console.log(todayDiv)
        // forecastDiv.innerHTML = ''; // Clear previous content
                    dailyMaxTemp.slice(1, 7).forEach((maxTemp, index) => {
                        const dayDiv = document.createElement('div');
                        const dayClass = `day-${index + 1}`;
                        const weekdayIndex = (dayOfWeek + index + 1) % 7;
                        dayDiv.classList.add(dayClass);
                        dayDiv.innerHTML = `${weekdays[weekdayIndex]}: Max Temperature is ${maxTemp} °C.`;
                        
                        forecastDiv.appendChild(dayDiv);
                    });
                const dayTwo = document.querySelector('.day-1');
                tomorrowDiv.appendChild(dayTwo);
                const dayThree = document.querySelector('.day-2');
                dayThreeDiv.appendChild(dayThree);
                const dayFour = document.querySelector('.day-3');
                dayFourDiv.appendChild(dayFour);
                const dayFive = document.querySelector('.day-4');
                dayFiveDiv.appendChild(dayFive);
                const daySix = document.querySelector('.day-5');
                daySixDiv.appendChild(daySix);
                const daySeven = document.querySelector('.day-6');
                daySevenDiv.appendChild(daySeven);
        });
        
    })
}
searchBtn.addEventListener('click', function() {
    getTemperature(searchField.value)
    })
searchField.addEventListener('keyup', (event) => {
    if (event.code === 'Enter') {
        getTemperature(searchField.value)
    }
})
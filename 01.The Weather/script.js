const weatherCodeArray = {
	"0":{
		"day":{
			"description":"Sunny",
			"image":"http://openweathermap.org/img/wn/01d@2x.png"
		},
		"night":{
			"description":"Clear",
			"image":"http://openweathermap.org/img/wn/01n@2x.png"
		}
	},
	"1":{
		"day":{
			"description":"Mainly Sunny",
			"image":"http://openweathermap.org/img/wn/01d@2x.png"
		},
		"night":{
			"description":"Mainly Clear",
			"image":"http://openweathermap.org/img/wn/01n@2x.png"
		}
	},
	"2":{
		"day":{
			"description":"Partly Cloudy",
			"image":"http://openweathermap.org/img/wn/02d@2x.png"
		},
		"night":{
			"description":"Partly Cloudy",
			"image":"http://openweathermap.org/img/wn/02n@2x.png"
		}
	},
	"3":{
		"day":{
			"description":"Cloudy",
			"image":"http://openweathermap.org/img/wn/03d@2x.png"
		},
		"night":{
			"description":"Cloudy",
			"image":"http://openweathermap.org/img/wn/03n@2x.png"
		}
	},
	"45":{
		"day":{
			"description":"Foggy",
			"image":"http://openweathermap.org/img/wn/50d@2x.png"
		},
		"night":{
			"description":"Foggy",
			"image":"http://openweathermap.org/img/wn/50n@2x.png"
		}
	},
	"48":{
		"day":{
			"description":"Rime Fog",
			"image":"http://openweathermap.org/img/wn/50d@2x.png"
		},
		"night":{
			"description":"Rime Fog",
			"image":"http://openweathermap.org/img/wn/50n@2x.png"
		}
	},
	"51":{
		"day":{
			"description":"Light Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Light Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"53":{
		"day":{
			"description":"Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"55":{
		"day":{
			"description":"Heavy Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Heavy Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"56":{
		"day":{
			"description":"Light Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Light Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"57":{
		"day":{
			"description":"Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Freezing Drizzle",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"61":{
		"day":{
			"description":"Light Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Light Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"63":{
		"day":{
			"description":"Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"65":{
		"day":{
			"description":"Heavy Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Heavy Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"66":{
		"day":{
			"description":"Light Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Light Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"67":{
		"day":{
			"description":"Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10d@2x.png"
		},
		"night":{
			"description":"Freezing Rain",
			"image":"http://openweathermap.org/img/wn/10n@2x.png"
		}
	},
	"71":{
		"day":{
			"description":"Light Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Light Snow",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"73":{
		"day":{
			"description":"Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Snow",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"75":{
		"day":{
			"description":"Heavy Snow",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Heavy Snow",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"77":{
		"day":{
			"description":"Snow Grains",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Snow Grains",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"80":{
		"day":{
			"description":"Light Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Light Showers",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"81":{
		"day":{
			"description":"Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Showers",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"82":{
		"day":{
			"description":"Heavy Showers",
			"image":"http://openweathermap.org/img/wn/09d@2x.png"
		},
		"night":{
			"description":"Heavy Showers",
			"image":"http://openweathermap.org/img/wn/09n@2x.png"
		}
	},
	"85":{
		"day":{
			"description":"Light Snow Showers",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Light Snow Showers",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"86":{
		"day":{
			"description":"Snow Showers",
			"image":"http://openweathermap.org/img/wn/13d@2x.png"
		},
		"night":{
			"description":"Snow Showers",
			"image":"http://openweathermap.org/img/wn/13n@2x.png"
		}
	},
	"95":{
		"day":{
			"description":"Thunderstorm",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"description":"Thunderstorm",
			"image":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	},
	"96":{
		"day":{
			"description":"Light Thunderstorms With Hail",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"description":"Light Thunderstorms With Hail",
			"image":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	},
	"99":{
		"day":{
			"description":"Thunderstorm With Hail",
			"image":"http://openweathermap.org/img/wn/11d@2x.png"
		},
		"night":{
			"description":"Thunderstorm With Hail",
			"image":"http://openweathermap.org/img/wn/11n@2x.png"
		}
	}
}

// const searchBtn = document.querySelector(".locationSearchBtn");
// const searchField = document.querySelector("#inputLocation");
// const forecastDiv = document.querySelector(".weatherForecast");

// // Create div elements for each day
// const todayDiv = createWeatherCard("Today");
// const tomorrowDiv = createWeatherCard("Tomorrow");
// const dayThreeDiv = createWeatherCard("DayThree");
// const dayFourDiv = createWeatherCard("DayFour");
// const dayFiveDiv = createWeatherCard("DayFive");
// const daySixDiv = createWeatherCard("DaySix");
// const daySevenDiv = createWeatherCard("DaySeven");
// const dayArray = [todayDiv, tomorrowDiv, dayThreeDiv, dayFourDiv, dayFiveDiv, daySixDiv, daySevenDiv];

// // Append the day divs to the forecastDiv
// forecastDiv.appendChild(todayDiv);
// forecastDiv.appendChild(tomorrowDiv);
// forecastDiv.appendChild(dayThreeDiv);
// forecastDiv.appendChild(dayFourDiv);
// forecastDiv.appendChild(dayFiveDiv);
// forecastDiv.appendChild(daySixDiv);
// forecastDiv.appendChild(daySevenDiv);

// const currentDate = new Date();
// const dayOfWeek = currentDate.getDay();
// const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const weekdayName = weekdays[dayOfWeek];

// const getTemperature = (cityInput) => {
//     console.log(cityInput);
//     fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + cityInput + '&count=10&language=en&format=json')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data.results[0]);
//             fetch('https://api.open-meteo.com/v1/forecast?latitude=' + data.results[0].latitude + '&longitude=' + data.results[0].longitude + '&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min')
//                 .then(response => response.json())
//                 .then(data => {
//                     const dailyMaxTemp = data.daily.temperature_2m_max;
//                     const dailyMinTemp = data.daily.temperature_2m_min;
//                     const weatherCodes = data.daily.weather_code;
//                     console.log(weatherCodes);

//                     // Display forecast for the next 6 days
//                     dayArray.forEach((dayDiv, index) => {
//                         const dayName = weekdays[(dayOfWeek + index) % 7]; // Wrap around to the beginning of the array
//                         const maxTemp = dailyMaxTemp[index];
//                         const minTemp = dailyMinTemp[index];
//                         const weatherCodesPerDay = weatherCodes[index];

//                         // Update the content of the day card
//                         dayDiv.querySelector(".dayName").textContent = dayName;
//                         dayDiv.querySelector(".maxTemp").textContent = `Max Temperature: ${maxTemp} °C`;
//                         dayDiv.querySelector(".minTemp").textContent = `Min Temperature: ${minTemp} °C`;
//                         const isDay = true; // Assume it's day, you can modify this based on your logic
//                         dayDiv.querySelector(".weatherCondition").textContent = getWeatherCondition(weatherCodesPerDay, isDay);
//                         dayDiv.style.display = 'block';
//                     });
//                 });
//         });
// };

// // Helper function to create a weather card for each day
// function getWeatherCondition(weatherCodesPerDay, isDay) {
//     const weatherInfo = weatherCodeArray[weatherCodesPerDay];
//     if (!weatherInfo) return 'Unknown';

//     const timeOfDay = isDay ? 'day' : 'night';
//     return weatherInfo[timeOfDay].description;
// }

// function createWeatherCard(dayName) {
//     const dayDiv = document.createElement('div');
//     dayDiv.classList.add('weatherCard');

//     const dayNameDiv = document.createElement('div');
//     dayNameDiv.classList.add('dayName');
//     dayNameDiv.textContent = dayName;
//     dayDiv.appendChild(dayNameDiv);

//     const maxTempDiv = document.createElement('div');
//     maxTempDiv.classList.add('maxTemp');
//     dayDiv.appendChild(maxTempDiv);

//     const minTempDiv = document.createElement('div');
//     minTempDiv.classList.add('minTemp');
//     dayDiv.appendChild(minTempDiv);

//     const weatherConditionDiv = document.createElement('div');
//     weatherConditionDiv.classList.add('weatherCondition');
//     dayDiv.appendChild(weatherConditionDiv);

//     const weatherCodesPerDay = weatherCodes;
//     const weatherInfo = weatherCodeArray[weatherCodesPerDay];
//     if (weatherInfo) {
//         const timeOfDay = 'day';
//         const imageSrc = weatherInfo[timeOfDay].image;

//         const weatherIcon = document.createElement('img');
//         weatherIcon.src = imageSrc;
//         weatherIcon.alt = getWeatherCondition(weatherCodesPerDay);
//         dayDiv.appendChild(weatherIcon);
//     }


//     return dayDiv;
// }

// searchBtn.addEventListener('click', function () {
//     getTemperature(searchField.value);
// });

// searchField.addEventListener('keyup', (event) => {
//     if (event.code === 'Enter') {
//         getTemperature(searchField.value);
//     }
// });

// TODO:
// Insert city


// Click search or enter key to submit
// Use API to get long and lat of city Input
// use long and lat to get weather conditions for that place
// Make an array of the weekdays
// Make card for each day of the week
// insert name of the week into card
// insert other data into card.
const cityInput = document.querySelector('#inputLocation');
const searchBtn = document.querySelector('.locationSearchBtn');
const weatherForecastDiv = document.querySelector('.weatherForecast');
const userInput = cityInput.value;
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



const d = new Date();
let day = weekday[d.getDay()];
console.log(day);


async function getCityData (userInput){
	const response = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + userInput + '&count=10&language=en&format=json')
	    const data = await response.json();
		return data.results[0];
		}

async function getWeatherData(cityName){
	const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + cityName.latitude + '&longitude=' + cityName.longitude + '&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min')
		const weatherData = await response.json();
		return weatherData;
}

async function getWeather (userInput){
	const coordinates = await getCityData(userInput);

	const getWeatherInfo = await getWeatherData(coordinates);
	console.log(getWeatherInfo)
	return getWeatherInfo;
}

searchBtn.addEventListener('click', function() {
	getWeather(cityInput.value)
}
)
cityInput.addEventListener('keyup', (event) => {
	if (event.key === 'enter') {
		getWeather(cityInput.value)
	}
})

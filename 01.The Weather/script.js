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
const currentDate = new Date();
const dayOfWeek = currentDate.getDay();
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekdayName = weekdays[dayOfWeek];

// Getting coordinates for the city search
async function getCityData (userInput){
	const response = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + userInput + '&count=10&language=en&format=json')
	    const data = await response.json();
		return data.results[0];
		}

// Add country???
// Add bad request???
// Getting city weather data using coordinates
async function getWeatherData(cityName){
	const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=' + cityName.latitude + '&longitude=' + cityName.longitude + '&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min')
		const weatherData = await response.json();
		return weatherData;
}

// Creating a function to call when eventlistener activates
async function getWeather (userInput){
	const coordinates = await getCityData(userInput);

	const getWeatherInfo = await getWeatherData(coordinates);

	addWeatherCards(getWeatherInfo);

	// console.log(getWeatherInfo)
	// return getWeatherInfo;
}

// Making the weathercards
function addWeatherCards(info) {
	console.log(info.daily)
	weekdays.forEach((weekday, index) => {

		while (weatherForecastDiv.lastChild) {
			weatherForecastDiv.removeChild(weatherForecastDiv.lastChild);
		};
		
		const dayDiv = document.createElement('div');
		dayDiv.classList.add('weatherCard');

		if (index === 0) dayDiv.classList.add("mainCard");
		const mainCard = document.querySelector(".mainCard")

		const dayTitle = document.createElement('h3');
		dayTitle.textContent = weekdays[(dayOfWeek + index) % 7];

		const maxTemp = document.createElement('h4');
		maxTemp.textContent = `Max: ${info.daily.temperature_2m_max[index]} °C`;

		const minTemp = document.createElement('h4');
		minTemp.textContent = `Min: ${info.daily.temperature_2m_min[index]} °C`;
		
		const weatherType = document.createElement('h4');
		weatherType.classList.add('weatherType');
		weatherType.textContent = weatherCodeArray[info.daily.weather_code[index]].day.description;
		const imageIcon = document.createElement('img');
		imageIcon.classList.add('weatherIcons')
		imageIcon.src = weatherCodeArray[info.daily.weather_code[index]].day.image;
		if (index === 0) imageIcon.classList.add("mainIcon");
		
		const subtitleCity = document.querySelector('h2');
		subtitleCity.textContent = cityInput.value;
		subtitleCity.style.display = 'block';

		dayDiv.appendChild(dayTitle);
		dayDiv.appendChild(imageIcon);
		dayDiv.appendChild(weatherType)
		dayDiv.appendChild(maxTemp);
		dayDiv.appendChild(minTemp);
	
		weatherForecastDiv.appendChild(dayDiv);
		
		dayDiv.style.display = 'block';
})
};

// Making eventlisteners for Click and Enter

searchBtn.addEventListener('click', function() {
	getWeather(cityInput.value);
	
})

cityInput.addEventListener('keyup', (event) => {
	if (event.key === 'Enter') {
		getWeather(cityInput.value)
	}
})
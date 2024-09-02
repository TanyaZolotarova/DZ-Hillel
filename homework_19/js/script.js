const container = document.createElement('div');
container.className = 'container';
container.style.cssText = `
text-align: center;
padding: 20px;
`
document.body.appendChild(container);

const title = document.createElement('h1');
title.className = 'title';
title.textContent = 'Weather widget';
title.style.cssText = `
font-size: 2em;
margin-bottom: 20px;
color: white;
`
container.appendChild(title);

const date = document.createElement('div');
date.className = 'date';
date.style.cssText = `
color: white;
margin-bottom: 10px;
`
container.appendChild(date);

const time = document.createElement('div');
time.className = 'time';
time.style.cssText = `
color: white;
font-size: 3em;
margin-bottom: 10px;
`
container.appendChild(time);

const weatherWrapper = document.createElement('div');
weatherWrapper.className = 'weather-container';
weatherWrapper.style.cssText = `
display: flex;
justify-content: center;
gap: 20px;
`
container.appendChild(weatherWrapper);

const weatherColumn_1 = document.createElement('div');
weatherColumn_1.className = 'weather-column';
weatherColumn_1.style.cssText = `
text-align: left;
`
weatherWrapper.appendChild(weatherColumn_1);

const weatherColumn_2 = document.createElement('div');
weatherColumn_2.className = 'weather-column';
weatherColumn_2.style.cssText = `
text-align: left;
`
weatherWrapper.appendChild(weatherColumn_2);

const myLocation = document.createElement('div');
myLocation.className = 'location';
myLocation.style.cssText = `
color: white;
margin-bottom: 10px;
`
weatherColumn_1.appendChild(myLocation);

const temperature = document.createElement('div');
temperature.className = 'temperature';
temperature.style.cssText = `
color: white;
margin-bottom: 10px;
`
weatherColumn_1.appendChild(temperature);

const feelsLike = document.createElement('div');
feelsLike.className = 'feels-like';
feelsLike.style.cssText = `
color: white;
margin-bottom: 10px;
`
weatherColumn_1.appendChild(feelsLike);

const pressure = document.createElement('div');
pressure.className = 'pressure';
pressure.style.cssText = `
color: white;
margin-bottom: 10px;
`
weatherColumn_2.appendChild(pressure);

const humidity = document.createElement('div');
humidity.className = 'humidity';
humidity.style.cssText = `
color: white;
margin-bottom: 10px;
`
weatherColumn_2.appendChild(humidity);

const cloudiness = document.createElement('div');
cloudiness.className = 'cloudiness';
cloudiness.style.cssText = `
color: white;
margin-bottom: 10px;
`;
weatherColumn_2.appendChild(cloudiness);

const wind = document.createElement('div');
wind.className = 'wind';
wind.style.cssText = `
color: white;
margin-bottom: 10px;
`;
weatherColumn_2.appendChild(wind);

const btn = document.createElement('button');
btn.className = 'btn';
btn.textContent = 'updating data';
btn.style.cssText = `
padding: 10px 20px;
border: none;
border-radius: 5px;
background-color: lightsteelblue;
color: white;
font-size: 16px;
cursor: pointer;
`
container.appendChild(btn);

const apiKey = 'e6b2d556ffbfcc72be08469f75ab5c10';
const city = 'Kyiv';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let timezoneOffsetInSeconds;
let isTimeIntervalSet = false;

function formatTime() {
    const currentDate = new Date();
    const utcTimeInMillis = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;
    const localTimeInMillis = utcTimeInMillis + timezoneOffsetInSeconds * 1000;
    const localDate = new Date(localTimeInMillis);

    const hours = String(localDate.getHours()).padStart(2, '0');
    const minutes = String(localDate.getMinutes()).padStart(2, '0');
    const day = localDate.getDate();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[localDate.getMonth()];
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = weekdayNames[localDate.getDay()];

    if (date && time) {
        date.textContent = `${weekday}, ${day} ${month}`;
        time.textContent = `${hours}:${minutes}`;
    }
}

async function showWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        if (!data || !data.main || typeof data.main.temp !== 'number' ||
            !data.sys || typeof data.sys.country !== 'string' ||
            !data.wind || typeof data.wind.speed !== 'number' ||
            typeof data.timezone !== 'number') throw new Error('Invalid data structure from API');

        timezoneOffsetInSeconds = data.timezone;

        myLocation.textContent = `Location: ${data.name}, ${data.sys.country}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        feelsLike.textContent = `Feels Like: ${data.main.feels_like}°C`;
        pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        cloudiness.textContent = `Cloudiness: ${data.clouds.all}%`;
        wind.textContent = `Wind: ${data.wind.speed} m/s`;

        formatTime();
        if (!isTimeIntervalSet) {
            setInterval(formatTime, 1000);
            isTimeIntervalSet = true;
        }
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

btn.addEventListener('click', showWeather);
showWeather()
    .then(result => {
        console.log('Result:', result);
    })
    .catch(error => {
        console.error('An error in the execution of an asynchronous function:', error);
    });
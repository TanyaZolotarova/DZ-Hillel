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

const apiKey = 'e6b2d556ffbfcc72be08469f75ab5c10'; // мой апи ключ, который мне прислали на почту для работы с апихой, что бы получать данные о погоде
const city = 'Kyiv'; // тут можно менять город, для которого будет полученна инфа о погоде
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; // линк который запрашивает данные с апихи и возвращает температурув градусах цельсия (units=metric)

let timezoneOffsetInSeconds; // переменная для хранения тайм зоны города в секундах, которые будут полученны с апихи
let isTimeIntervalSet = false; // переменная для проверки был ли уже установлен интервал для обновления времени, исключает повторное обновление времени каждую секунду

function formatTime() {
    const currentDate = new Date(); // создает обьект текущего времени. Объект Date содержит число миллисекунд, прошедших с полуночи (00:00:00 UTC) 1 января 1970 года (этот момент называют «эпохой Unix»)
    const utcTimeInMillis = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;
    // currentDate.getTime() - возвращает текущее время в миллисекундах с 1 января 1970 года (UTC)
    // currentDate.getTimezoneOffset() -  возвращает смещение времени в минутах между UTC и местным временем
    // умножение на 60000 - переводит данные выше минуты в милисекунды
    const localTimeInMillis = utcTimeInMillis + timezoneOffsetInSeconds * 1000; // рассчитывается локальное время в миллисекундах для города, добавляя смещение времени, полученное с апихи, к времени UTC
    const localDate = new Date(localTimeInMillis); // создаётся новый объект Date, который представляет локальное время города на основе уже рассчитанного времени в миллисекундах

    const hours = String(localDate.getHours()).padStart(2, '0');
    const minutes = String(localDate.getMinutes()).padStart(2, '0');
    // Получаются часы (getHours) и минуты (getMinutes) в стринге из объекта localDate
    // с помощью метода padStart() дополняются нулями до двух символов, чтобы всегда отображать две цифры (00:00)
    // padStart(2, '0') -Метод padStart() заполняет текущую строку другой строкой так, что итоговая строка достигает заданной длины. Заполнение осуществляется в начале (слева) текущей строки.
    // тоесть первый аргумент - это длина строки которую мы хотим видеть, а вторым аргументом идет уже то что мы хотим туда пихнуть
    const day = localDate.getDate(); // получаем день месяца из обьекта localDate
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]; // создается массив с именами месяцев, что бы отобразить их названия в тексте
    const month = monthNames[localDate.getMonth()]; // получаем индекс текущего месяца (getMonth() возвращает индекс от 0 до 11) и используем для получения определенного месяца для отображения
    const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = weekdayNames[localDate.getDay()];
    // тоже самое происходит как и для переменных monthNames и month. Дни недели начинаем с вс

    if (date && time) { // если существуют/отображены елементы date и time то их textContent обновляется что бы отобразить тукущий день недели, дату и время
        date.textContent = `${weekday}, ${day} ${month}`;
        time.textContent = `${hours}:${minutes}`;
    }
}

async function showWeather() { // обьявила асинхронную функцию, которая будет использовать fetch для получения данных с апихи
    try { // будет пытаться выполнить то, что содержит внутри себя
        const response = await fetch(apiUrl); // ждет пока fetch отправит запрос в апиху по выше описанной урле
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`); // если ответ от сервера не успешный, вбрасывается ошибка с кодом статуса HTTP

        const data = await response.json(); // ждет ответ с апихи и преобразовывает в обьект json

        if (!data) throw new Error('Invalid data from API'); // если обьекта json нет, то вбрасывается ошибка

        timezoneOffsetInSeconds = data.timezone; // смещение часового пояса полученного с апихи , сохраняется в переменной

        // ниже отображаются данные в textContent елементов которое пришли с апихи
        myLocation.textContent = `Location: ${data.name}, ${data.sys.country}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        feelsLike.textContent = `Feels Like: ${data.main.feels_like}°C`;
        pressure.textContent = `Pressure: ${data.main.pressure} hPa`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        cloudiness.textContent = `Cloudiness: ${data.clouds.all}%`;
        wind.textContent = `Wind: ${data.wind.speed} m/s`;

        formatTime(); // вызывается функция formatTime, чтобы сразу же обновить время на основе полученного часового пояса
        if (!isTimeIntervalSet) { // если интервал времени еще не был установлен то:
            setInterval(formatTime, 1000);
            // функция formatTime будет вызываться каждую секунду, это приведет к тому, что время на экране обновляется каждую секунду,
            // показывая текущее время с учетом часового пояса указанного города
            isTimeIntervalSet = true; // устанавливает переменную интервала в true. Это гарантирует, что интервал устанавливается только один раз, и код в этом блоке не выполняется повторно.
        }
        return data; // возвращает данные полученные с апихи в обьекте, что бы их можно было использовать еще
    } catch (error) { // впоймает ошибку в случае какой то лажи в try
        console.error('Error fetching weather data:', error); // и покажет ошибку в консоли
    }
}

btn.addEventListener('click', showWeather); // добавлена прослушка по клику на кнопку, которая будет вызавать функцию/обновлять данные полученные с апихи
showWeather() // вызываем функцию которая возвращает промисы, то что обещал вернуть из этой функции
    .then(result => { // возвращает результат промиса , в данном случае данные которые вырнулись с апихи
        console.log('Result:', result); // результат промиса покажет обьект с данными о погоде и времени
    })
    .catch(error => { // обработка ошибки если что то пошло не так при выполнении запроса или обработке данных в функции showWeather
        console.error('An error in the execution of an asynchronous function:', error); // выведет ошибку в консоль при неудаче в функции
    });
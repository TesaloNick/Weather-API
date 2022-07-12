const resultCity = document.querySelector('.weather__city')
const resultTemperature = document.querySelector('.weather__temperature')
const resultImgWeather = document.querySelector('.weather__img_weather')
const resultImgFlag = document.querySelector('.weather__img_flag')
const resultWind = document.querySelector('.weather__wind')
const form = document.querySelector('.form')
const input = document.querySelector('.form__input')
// const temperature = document.querySelector('.weather__temperature')
let lat = 55.75;
let lon = 37.61;
let part = 'current';
let lang = 'ru';
let time = 1586468027;
let key = 'ac33dbc75c16a1411070776e8365c1c1';

form.addEventListener('submit', (e) => {
  e.preventDefault()
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + key)
    .then(response => response.json())
    .then(commits => {
      console.log(commits);
      resultCity.innerHTML = `Город: ${commits.name}`
      resultTemperature.innerHTML = `Температура: ${Math.round(commits.main.temp - 273.15)}${String.fromCharCode(0xB0)}C`
      resultWind.innerHTML = `Скорость ветра: ${commits.wind.speed} м/с`
      resultImgWeather.setAttribute('src', `http://openweathermap.org/img/wn/${commits.weather[0].icon}.png`)
      resultImgFlag.setAttribute('src', `http://openweathermap.org/images/flags/${commits.sys.country.toLowerCase()}.png`)
    });
})

// fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&dt=${time}&lang=${lang}&units=metric&appid=${key}`)
// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=ac33dbc75c16a1411070776e8365c1c1
// https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=ac33dbc75c16a1411070776e8365c1c1

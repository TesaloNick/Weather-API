const weather = document.querySelector('.weather')
const form = document.querySelector('.form')
const input = document.querySelector('.form__input')

let key = 'ac33dbc75c16a1411070776e8365c1c1';

let promise = new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      resolve({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
    }
  );
}).then(coord => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${key}`)
    .then(response => response.json())
    .then(commits => {
      console.log(commits, commits.cod);
      if (+commits.cod === 200) {
        weather.innerHTML = `
          <div class="weather__location">
            <h2 class="weather__city">${commits.name}</h2>
            <img src="http://openweathermap.org/images/flags/${commits.sys.country.toLowerCase()}.png" alt="" class="weather__img_flag">
          </div>
          <p class="weather__temperature">Temperature: ${(commits.main.temp - 273.15).toFixed(2)}${String.fromCharCode(0xB0)}C (feels like ${(commits.main.feels_like - 273.15).toFixed(2)}${String.fromCharCode(0xB0)}C)</p>
          <p class="weather__wind">Wind speed: ${commits.wind.speed} m/с</p>
          <p class="weather__visibility">Visibility: ${commits.visibility} m</p>
          <p class="weather__humidity">Humidity: ${commits.main.humidity}%</p>
          <p class="weather__pressure">Pressure: ${(commits.main.pressure * 0.7500637).toFixed(0)} mm</p>
          <div class="weather__description_wrapper">
            <img src="http://openweathermap.org/img/wn/${commits.weather[0].icon}.png" alt="" class="weather__img_weather">
            <p class="weather__description">${commits.weather[0].description}</p>
          </div>
          `
      } else {
        weather.innerHTML = `
          <h2>Wrong input</h2>
          `
      }
    });
})
console.log(lat);

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=ac33dbc75c16a1411070776e8365c1c1')
//     .then(response => response.json())
//     .then(commits => {
//       console.log(commits, commits.cod);
//       if (+commits.cod === 200) {
//         weather.innerHTML = `
//         <div class="weather__location">
//           <h2 class="weather__city">${commits.name}</h2>
//           <img src="http://openweathermap.org/images/flags/${commits.sys.country.toLowerCase()}.png" alt="" class="weather__img_flag">
//         </div>
//         <p class="weather__temperature">Temperature: ${(commits.main.temp - 273.15).toFixed(2)}${String.fromCharCode(0xB0)}C (feels like ${(commits.main.feels_like - 273.15).toFixed(2)}${String.fromCharCode(0xB0)}C)</p>
//         <p class="weather__wind">Wind speed: ${commits.wind.speed} m/с</p>
//         <p class="weather__visibility">Visibility: ${commits.visibility} m</p>
//         <p class="weather__humidity">Humidity: ${commits.main.humidity}%</p>
//         <p class="weather__pressure">Pressure: ${(commits.main.pressure * 0.7500637).toFixed(0)} mm</p>
//         <div class="weather__description_wrapper">
//           <img src="http://openweathermap.org/img/wn/${commits.weather[0].icon}.png" alt="" class="weather__img_weather">
//           <p class="weather__description">${commits.weather[0].description}</p>
//         </div>
//       `
//       } else {
//         weather.innerHTML = `
//         <h2>Wrong input</h2>
//       `
//       }
//     });
// })


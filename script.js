const city = document.querySelector('.weather__city')
const temperature = document.querySelector('.weather__temperature')
let lat = 55.75;
let lon = 37.61;
let part = 'current';
let key = 'ac33dbc75c16a1411070776e8365c1c1';
fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}`)
  // fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ac33dbc75c16a1411070776e8365c1c1')
  .then(response => response.json())
  .then(commits => {
    console.log(commits);
    city.innerHTML = commits.city.name
  });


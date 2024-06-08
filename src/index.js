let currCity = "London";
let units = "metric";

// Selectors
let city = document.querySelector(".weather__city");
let currentDateELement = document.querySelector(".weather__datetime ");
let weather__forecast = document.querySelector(".weather__forecast");
let weather__temperature = document.querySelector(".weather__temperature");
let weather__icon = document.querySelector(".weather__icon");
let weather__realfeel = document.querySelector(".weather__realfeel");
let weather__humidity = document.querySelector(".weather__humidity");
let weather__wind = document.querySelector(".weather__wind");
let weather__pressure = document.querySelector(".weather__pressure");

// search
document.querySelector(".weather__search").addEventListener("submit", (e) => {
  let search = document.querySelector(".weather__searchform");
  // prevent default action
  e.preventDefault();
  // change current city
  currCity = search.value;
  console.log(currCity);
  // get weather forecast
  getWeather();
  // clear form
  search.value = "";
});

// units
document
  .querySelector(".weather_unit_celsius")
  .addEventListener("click", () => {
    if (units !== "metric") {
      // change to metric
      units = "metric";
      // get weather forecast
      getWeather();
    }
  });

document
  .querySelector(".weather_unit_farenheit")
  .addEventListener("click", () => {
    if (units !== "imperial") {
      // change to imperial
      units = "imperial";
      // get weather forecast
      getWeather();
    }
  });

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

function getWeather() {
  const API_KEY = "e84352t57bcfd38870b8f1603bcaa4o4";
  //   `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

  fetch(
    `https://api.shecodes.io/weather/v1/current?query=${currCity}&key=${API_KEY}&units=${units}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      city.innerHTML = `${data.city}`;
      weather__temperature.innerHTML = `${data.temperature.current.toFixed()}&#176`;
      weather__icon.innerHTML = `   <img src=${data.condition.icon_url} />`;
      weather__realfeel.innerHTML = `${data.temperature.feels_like.toFixed()}&#176`;
      weather__humidity.innerHTML = `${data.temperature.humidity}%`;
      weather__wind.innerHTML = `${data.wind.speed} ${
        units === "imperial" ? "mph" : "m/s"
      }`;
      weather__pressure.innerHTML = `${data.temperature.pressure} hPa`;
    });
}

document.body.addEventListener("load", getWeather());

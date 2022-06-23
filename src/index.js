let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let time = document.querySelector(".date");
time.innerHTML = `${day} ${hours}:${minutes}`;

function showTemperature(response) {
  let city = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let weather = response.data.weather[0].main;
  let currentCity = document.querySelector(".city");
  currentCity.innerHTML = `${city}`;
  let h1 = document.querySelector(".temp");
  h1.innerHTML = `${temperature}°C`;
  let li = document.querySelector(".weather");
  li.innerHTML = `${weather}`;
}
function searchCity(city) {
  let apiKey = "e3a777fc1d55e0a271349e7b53f228c1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function inputSubmit(event) {
  event.preventDefault();
  let search = document.querySelector("#city-input");
  let city = `${search.value}`;
  searchCity(city);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", inputSubmit);
searchCity("Kyiv");

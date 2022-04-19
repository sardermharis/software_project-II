let weather = {
  apikey: "0e18026873251b53840c4a5b8b092e68",
  fetchWeather: function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apikey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(`${name} ${icon} ${description} ${temp} ${humidity} ${speed}`);
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + " °C";
    document.querySelector(".humidity").innerHTML =
      "Humidity " + humidity + " %";
    document.querySelector(".wind").innerHTML = "Wind speed " + speed + " Km/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    let city = document.querySelector(".search-bar").value;
    this.fetchWeather(city);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Dhaka");

"use strict";

function getData(url) {
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url).then(function (data) {
            return data.json();
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

function showWeather(event) {
  event.preventDefault();
  var cityValue = event.target.city.value;
  getData("https://api.openweathermap.org/data/2.5/weather?q=".concat(cityValue, "&units=metric&appid=7e3dd19d307e2c88d6325375c12fbe4e")).then(function (data) {
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('#city').innerHTML = data.name;
    icon.src = "http://openweathermap.org/img/wn/".concat(data.weather[0].icon, "@2x.png");
    descr.innerHTML = data.weather[0].main;
    temp.innerHTML = data.main.temp.toFixed(1) + '&#176' + 'C';
    min_temp.innerHTML = data.main.temp_min.toFixed(1) + '&#176' + 'C';
    max_temp.innerHTML = data.main.temp_max.toFixed(1) + '&#176' + 'C';
    wind.innerHTML = data.wind.speed;
    var date = data.dt;
    document.querySelector('#date').innerHTML = new Date(date * 1000).toLocaleDateString();
    console.log(data);
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(data.coord.lat, "&lon=").concat(data.coord.lon, "&units=metric&appid=7e3dd19d307e2c88d6325375c12fbe4e")).then(function (data) {
      return data.json();
    }).then(function (data) {
      document.querySelector('.hour_weather_wrapepr').style.display = 'flex';
      day.innerHTML = new Date().toLocaleString('en-us', {
        weekday: 'long'
      });
      console.log(data);
    });
  })["catch"](function (error) {
    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.weather').innerHTML = "<div class=\"error\" id=\"error\">\n        <h1> Error 404 </h1> <h2>NOT FOUND</h2> <h3>Please enter a different city</h3></div>";
    setTimeout(function () {
      alert('ERROR');
      window.location.reload();
    });
  });
  cityValue = '';
}
let city = prompt("Введіть назву міста");
console.log(city);

fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`
   )
   .then(function (resp) {
      return resp.json();
   })

   .then(function (data) {
      console.log(data);
      document.querySelector(".city").textContent = "City: " + data.name;
      document.querySelector(".humidity").textContent =
         "Humidity : " + data.main.humidity + "%";
      document.querySelector(".pressure").textContent =
         "Pressure : " + data.main.pressure + " hPa";
      document.querySelector(".wind-speed").textContent =
         "Speed of wind: " + data.wind.speed + " km/h";
      document.querySelector(".degrees").innerHTML = "Degrees: " + data.wind.deg + "&deg;";
      document.querySelector(".icon").innerHTML = '<img src = "https://openweathermap.org/img/w/' + data.weather[0].icon + '.png">';
      document.querySelector(".temperature").innerHTML = "Temperature: " +
         Math.round(data.main.temp) + "&deg;" + " C";
      document.querySelector(".description").textContent = data.weather[0].description;
   });
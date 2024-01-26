// API call
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat = "lat=65.8322&";
let lon = "lon=45.5330&";
let apiOptions = "units=metric&exclude=minutely,alerts&";
let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
let file = queryUrl + lat + lon + apiOptions + apiKey;

fetch(file)
  .then((response) => response.json())
  .then((data) => {
    // Weather main data
    let main = data.current.weather[0].main;
    let description = data.current.weather[0].description;
    let temp = Math.round(data.current.temp);
    let pressure = data.current.pressure;
    let humidity = data.current.humidity;
    let name = "Hampton";

    document.getElementById("wrapper-description").innerHTML = description;
    document.getElementById("wrapper-temp").innerHTML = temp + "°C";
    document.getElementById("wrapper-pressure").innerHTML = pressure;
    document.getElementById("wrapper-humidity").innerHTML = humidity;
    document.getElementById("wrapper-name").innerHTML = name;

    // Weather hourly data
    let hourNow = data.hourly[0].temp;
    let hour1 = data.hourly[1].temp;
    let hour2 = data.hourly[2].temp;
    let hour3 = data.hourly[3].temp;
    let hour4 = data.hourly[4].temp;
    let hour5 = data.hourly[5].temp;

    document.getElementById("wrapper-hour-now").innerHTML = hourNow + "°";
    document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
    document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
    document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";
    document.getElementById("wrapper-hour4").innerHTML = hour4 + "°";
    document.getElementById("wrapper-hour5").innerHTML = hour5 + "°";

    // Time
    let timeNow = new Date();
    let hoursNow = timeNow.getHours();
    let amPm = hoursNow >= 12 ? "PM" : "AM";
    let formattedHoursNow = hoursNow % 12 || 12; // Convert to 12-hour format

    let time1 = formattedHoursNow + 1;
    let time2 = time1 + 1;
    let time3 = time2 + 1;
    let time4 = time3 + 1;
    let time5 = time4 + 1;

    document.getElementById("wrapper-time1").innerHTML =
      formatTime(time1) + " " + amPm;
    document.getElementById("wrapper-time2").innerHTML =
      formatTime(time2) + " " + amPm;
    document.getElementById("wrapper-time3").innerHTML =
      formatTime(time3) + " " + amPm;
    document.getElementById("wrapper-time4").innerHTML =
      formatTime(time4) + " " + amPm;
    document.getElementById("wrapper-time5").innerHTML =
      formatTime(time5) + " " + amPm;

    // Helper function to format time without leading zero
    function formatTime(time) {
      return time >= 10 ? time : " " + time; // Add a space for single-digit hours
    }

    // Weather daily data
    // Weather hourly data
    let hourlyTemps = data.hourly.map((hour) => Math.round(hour.temp));

    document.getElementById("wrapper-hour-now").innerHTML =
      hourlyTemps[0] + "°";
    document.getElementById("wrapper-hour1").innerHTML = hourlyTemps[1] + "°";
    document.getElementById("wrapper-hour2").innerHTML = hourlyTemps[2] + "°";
    document.getElementById("wrapper-hour3").innerHTML = hourlyTemps[3] + "°";
    document.getElementById("wrapper-hour4").innerHTML = hourlyTemps[4] + "°";
    document.getElementById("wrapper-hour5").innerHTML = hourlyTemps[5] + "°";

    // Icons
    let iconBaseUrl = "http://openweathermap.org/img/wn/";
    let iconFormat = ".webp";

    // Today
    let iconCodeToday = data.current.weather[0].icon;
    let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
    document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;

    // Tomorrow
    let iconCodeTomorrow = data.daily[0].weather[0].icon;
    let iconFullyUrlTomorrow = iconBaseUrl + iconCodeTomorrow + iconFormat;
    document.getElementById("wrapper-icon-tomorrow").src = iconFullyUrlTomorrow;

    // Day after tomorrow
    let iconCodeDAT = data.daily[1].weather[0].icon;
    let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
    document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;

    // Icons hourly

    // Hour now
    let iconHourNow = data.hourly[0].weather[0].icon;
    let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
    document.getElementById("wrapper-icon-hour-now").src = iconFullyUrlHourNow;

    // Hour1
    let iconHour1 = data.hourly[1].weather[0].icon;
    let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
    document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

    // Hour2
    let iconHour2 = data.hourly[2].weather[0].icon;
    let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
    document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour2;

    // Hour3
    let iconHour3 = data.hourly[3].weather[0].icon;
    let iconFullyUrlHour3 = iconBaseUrl + iconHour3 + iconFormat;
    document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;

    // Hour4
    let iconHour4 = data.hourly[4].weather[0].icon;
    let iconFullyUrlHour4 = iconBaseUrl + iconHour4 + iconFormat;
    document.getElementById("wrapper-icon-hour4").src = iconFullyUrlHour4;

    // Hour5
    let iconHour5 = data.hourly[5].weather[0].icon;
    let iconFullyUrlHour5 = iconBaseUrl + iconHour5 + iconFormat;
    document.getElementById("wrapper-icon-hour5").src = iconFullyUrlHour5;

    // Backgrounds
    switch (main) {
      case "Snow":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
        break;
      case "Clouds":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
        break;
      case "Fog":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
        break;
      case "Rain":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
        break;
      case "Clear":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
        break;
      case "Thunderstorm":
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
        break;
      default:
        document.getElementById("wrapper-bg").style.backgroundImage =
          "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
        break;
    }
  });

document.getElementById("btnHampton").addEventListener("click", function () {
  fetchWeatherData(65.8322, 45.533, "Hampton");
});

document.getElementById("btnFredericton").addEventListener("click", function () {
    fetchWeatherData(45.9636, 66.6431, "Fredericton");
  });

document.getElementById("btnMoncton").addEventListener("click", function () {
  fetchWeatherData(46.0878, 64.7782, "Moncton");
});

document.getElementById("btnStJohns").addEventListener("click", function () {
  fetchWeatherData(45.9636, 52.7453, "St.Johns");
});

document.getElementById("btnHalifax").addEventListener("click", function () {
  fetchWeatherData(44.6476, 63.5728, "Halifax");
});

document.getElementById("btnGreenwood").addEventListener("click", function () {
  fetchWeatherData(44.9717, 64.9341, "Greenwood");
});

document
  .getElementById("btnCharlottetown").addEventListener("click", function () {
    fetchWeatherData(46.2382, 63.1311, "Charlottetown");
});

function fetchWeatherData(latitude, longitude, city) {
  // Update the API URL with the new latitude and longitude
  let file = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e`;

  // Update the search box with the city name
  document.getElementById("search-box").value = city;

  // Trigger the search button click
  document.getElementById("search-button").click();
}

//Function to execute search
function executeSearch() {
  const city = document.getElementById("search-box").value;

  // Validate the entered city
  if (!validateCity(city)) {
    return; // Do nothing if the city is not valid
  }

  // Get the coordinates for the entered city
  const { latitude, longitude } = getCityCoordinates(city);

  // Update the API URL with the new latitude and longitude
  let file = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e`;
}

document
  .getElementById("search-button")
  .addEventListener("click", executeSearch);
document
  .getElementById("search-box")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      executeSearch();
    }
  });

function validateCity(city) {
  const maritimeCities = {
    "Saint John": [45.2733, 66.0633],
    "Fredericton": [45.9636, 66.6431],
    "Moncton": [46.0878, 64.7782],
    "Bathurst": [47.6194, 65.6514],
    "Miramichi": [47.0297, 65.4819],
    "Edmundston": [47.3552, 68.3324],
    "Campbellton": [48.0075, 66.6727],
    "Woodstock": [46.1554, 67.5969],
    "Sussex": [45.7188, 65.5157],
    "Saint Andrews": [45.0731, 67.053],
    "Hampton": [45.527, 65.8418],
    "Oromocto": [45.8266, 66.4816],
    "St.Stephen": [45.1947, 67.2755],
    "Halifax": [44.6488, 63.5752],
    "Dartmouth": [44.6714, 63.5772],
    "Sydney": [46.1366, 60.1941],
    "Truro": [45.3657, 63.2869],
    "New Glasgow": [45.5864, 62.647],
    "Glace Bay": [46.1968, 59.9566],
    "Berwick": [45.0518, 64.7373],
    "Windsor": [44.99, 64.1317],
    "Greenwood": [44.9717, 64.9341],
    "Middleton": [44.942, 65.0607],
    "Bridgetown": [44.9784, 65.2546],
    "Liverpool": [44.0341, 64.7169],
    "Antigonish": [45.624, 62.001],
    "Port Hawkesbury": [45.6169, 61.3584],
    "Charlottetown": [46.2382, 63.1311],
    "Summerside": [46.3932, 63.7874],
    "Tignish": [46.9501, 64.0063],
    "O'Leary": [46.7101, 64.2304],
    "Tyne Valley": [46.5954, 63.9331],
    "Ellerslie": [46.6149, 63.8829],
    "Alberton": [46.8149, 64.0654],
    "St.Peters": [46.4546, 62.5797],
    "St.Johns": [47.5675, 52.7076],
    "Mount Pearl": [47.5169, 52.8066],
    "Corner Brook": [48.9501, 57.9517],
    "Grand Falls-Windsor": [48.9393, 55.6679],
    "Gander": [48.9553, 54.6087],
    "Labrador City": [52.9451, 66.917],
    "Happy Valley-Goose Bay": [53.3031, 60.3267],
    "Clarenville": [48.1805, 53.9674],
    "Bay Roberts": [47.5896, 53.2644],
    "Deer Lake": [49.17, 57.4267],
    "Bonavista": [48.6499, 53.1119],
    "Twillingate": [49.6475, 54.7698],
    "Lewisporte": [49.2494, 55.048],
    "Burgeo": [47.6129, 57.6159],
    "Port aux Basques": [47.5704, 59.1367],
  };

  // Convert the entered city to title case for case-insensitive comparison
  const formattedCity = city
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());

  // Check if the formatted city is in the list
  if (maritimeCities.hasOwnProperty(formattedCity)) {
    return true; // City is valid
  } else {
    alert(
      "You must enter a city from NL, PEI, NS, or NB. Please ensure correct spelling!"
    );
    return false; // City is not valid
  }
}

function updateWeatherForCity(latitude, longitude, city) {
  // API call for the specified city
  let file = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e`;

  fetch(file)
    .then((response) => response.json())
    .then((data) => {
      // Update weather data based on the chosen city
      let main = data.current.weather[0].main;
      let description = data.current.weather[0].description;
      let temp = Math.round(data.current.temp);
      let pressure = data.current.pressure;
      let humidity = data.current.humidity;

      // Update the HTML elements with the new weather data
      document.getElementById("wrapper-description").innerHTML = description;
      document.getElementById("wrapper-temp").innerHTML = temp + "°C";
      document.getElementById("wrapper-pressure").innerHTML = pressure;
      document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
      document.getElementById("wrapper-name").innerHTML = city;

      // Rest of your existing code to update hourly data, icons, backgrounds, etc.
      // ...

      // You can also add code to update other elements based on the chosen city
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function displayCurrentDateTime() {
  // Create a new Date object to get the current date and time
  const currentDate = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timeZoneName: "short",
  };

  // Format the date and time as a string
  const formattedDateTime = currentDate.toLocaleString("en-US", options);

  const dateTimeContainer = document.getElementById("datetime-container");
  const dateTimeElement = document.getElementById("date-time");

  dateTimeElement.textContent = `${formattedDateTime}`;
}

// Call the function when the page is loaded
window.onload = function () {
  displayCurrentDateTime();
  setInterval(displayCurrentDateTime, 1000); // Update every 1000 milliseconds (1 second)
};

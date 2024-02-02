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

    // Time to am/pm 12 hour clock
    let timeNow = new Date();
    let hoursNow = timeNow.getHours();
    let amPm = hoursNow >= 12 ? "AM" : "PM";
    let formattedHoursNow = hoursNow % 12 || 12;

    let time1 = formattedHoursNow + 1;
    let time2 = time1 + (1 % 12) || 12;
    let time3 = time2 + (1 % 12) || 12;
    let time4 = time3 + (1 % 12) || 12;
    let time5 = time4 + (1 % 12) || 12;

    // Adjust AM/PM for the next hours
    let amPm1 = time1 >= 12 ? "AM" : "PM";
    let amPm2 = time2 >= 12 ? "AM" : "PM";
    let amPm3 = time3 >= 12 ? "AM" : "PM";
    let amPm4 = time4 >= 12 ? "AM" : "PM";
    let amPm5 = time5 >= 12 ? "AM" : "PM";

    document.getElementById("wrapper-time1").innerHTML =
      formatTime(time1) + " " + amPm1;
    document.getElementById("wrapper-time2").innerHTML =
      formatTime(time2) + " " + amPm2;
    document.getElementById("wrapper-time3").innerHTML =
      formatTime(time3) + " " + amPm3;
    document.getElementById("wrapper-time4").innerHTML =
      formatTime(time4) + " " + amPm4;
    document.getElementById("wrapper-time5").innerHTML =
      formatTime(time5) + " " + amPm5;

    // Helper function to format time without leading zero
    function formatTime(time) {
      return time >= 10 ? time : "0" + time;
    }

    // Weather daily data & Weather hourly data
    let hourlyTemps = data.hourly.map((hour) => Math.round(hour.temp));

    document.getElementById("wrapper-hour-now").innerHTML = hourlyTemps[0] + "°";
    document.getElementById("wrapper-hour1").innerHTML = hourlyTemps[1] + "°";
    document.getElementById("wrapper-hour2").innerHTML = hourlyTemps[2] + "°";
    document.getElementById("wrapper-hour3").innerHTML = hourlyTemps[3] + "°";
    document.getElementById("wrapper-hour4").innerHTML = hourlyTemps[4] + "°";
    document.getElementById("wrapper-hour5").innerHTML = hourlyTemps[5] + "°";

    // Icons
    let iconBaseUrl = "https://openweathermap.org/img/wn/";
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
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });
// Function to update background image
function updateBackgroundImage(imageUrl) {
  document.getElementById("wrapper-bg").style.backgroundImage = `url('${imageUrl}')`;
}

// Define the city coordinates
const cityCoordinates = {
  "Hampton": { latitude: 45.527, longitude: 65.8418 },
  "Fredericton": { latitude: 45.9636, longitude: 66.6431 },
  "Moncton": { latitude: 46.0878, longitude: 64.7782 },
  "St.Johns": { latitude: 47.5675, longitude: 52.7076 },
  "Halifax": { latitude: 44.6488, longitude: 63.5752 },
  "Greenwood": { latitude: 44.9717, longitude: 64.9341 },
  "Charlottetown": { latitude: 46.2382, longitude: 63.1311 },
};

function fetchWeatherData(latitude, longitude, city) {
  // Update the API URL with the new latitude and longitude
  let file = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e`;

  // Fetch weather data for the specified city
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
      document.getElementById("wrapper-humidity").innerHTML = humidity;
      document.getElementById("wrapper-name").innerHTML = city;

      // Backgrounds based on weather condition code (icon)
      let iconCode = data.current.weather[0].icon;
      updateBackgroundImage(getBackgroundImageURL(iconCode));

      // Update background on the main section based on current weather
      updateMainBackground(main);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

// Function to get background image URL based on weather condition code
function getBackgroundImageURL(iconCode) {
  const iconBaseUrl = "https://openweathermap.org/img/wn/";
  const iconFormat = ".webp";
  return `${iconBaseUrl}${iconCode}${iconFormat}`;
}

// Function to update background image
function updateBackgroundImage(imageUrl) {
  document.getElementById("wrapper-bg").style.backgroundImage = `url('${imageUrl}')`;
}

// Function to update main background based on weather condition
function updateMainBackground(main) {
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
}


// Event listeners for city buttons
document.getElementById("btnHampton").addEventListener("click", function () {
  fetchWeatherData(45.527, 65.8418, "Hampton");
});

document.getElementById("btnFredericton").addEventListener("click", function () {
  fetchWeatherData(45.9636, 66.6431, "Fredericton");
});

document.getElementById("btnMoncton").addEventListener("click", function () {
  fetchWeatherData(46.0878, 64.7782, "Moncton");
});

document.getElementById("btnStJohns").addEventListener("click", function () {
  fetchWeatherData(47.5675, 52.7076, "St.Johns");
});

document.getElementById("btnHalifax").addEventListener("click", function () {
  fetchWeatherData(44.6488, 63.5752, "Halifax");
});

document.getElementById("btnGreenwood").addEventListener("click", function () {
  fetchWeatherData(44.9717, 64.9341, "Greenwood");
});

document.getElementById("btnCharlottetown").addEventListener("click", function () {
  fetchWeatherData(46.2382, 63.1311, "Charlottetown");
});

  function displayCurrentDateTime() {
    // Create a new Date object to get the current date and time
    const currentDate = new Date();
  
    // Get the day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
  
    // Format date, hours, and minutes
    const formattedDate = currentDate.toLocaleDateString();
    let hours = currentDate.getHours();
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutes = currentDate.getMinutes();
    const formattedTime = `${hours}:${minutes} ${amPm}`;
  
    // Display the formatted date, day of the week, and time in a specific container
    const dateTimeContainer = document.getElementById('datetime-container');
    const dateTimeElement = document.getElementById('date-time');
  
    dateTimeElement.textContent = `${dayOfWeek}, ${formattedDate} ${formattedTime}`;
  }
  
  // Call the function when the page is loaded
  window.onload = function() {
    displayCurrentDateTime();
    setInterval(displayCurrentDateTime, 60000); // Update every 1 minute
  };

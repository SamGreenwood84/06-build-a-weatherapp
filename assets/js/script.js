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
document.getElementById("wrapper-humidity").innerHTML = humidity + "°C";
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
let amPm = hoursNow >= 12 ? 'PM' : 'AM';
let formattedHoursNow = hoursNow % 12 || 12; // Convert to 12-hour format

let time1 = formattedHoursNow + 1;
let time2 = time1 + 1;
let time3 = time2 + 1;
let time4 = time3 + 1;
let time5 = time4 + 1;

document.getElementById("wrapper-time1").innerHTML = formatTime(time1) + ' ' + amPm;
document.getElementById("wrapper-time2").innerHTML = formatTime(time2) + ' ' + amPm;
document.getElementById("wrapper-time3").innerHTML = formatTime(time3) + ' ' + amPm;
document.getElementById("wrapper-time4").innerHTML = formatTime(time4) + ' ' + amPm;
document.getElementById("wrapper-time5").innerHTML = formatTime(time5) + ' ' + amPm;

// Helper function to format time without leading zero
function formatTime(time) {
    return time >= 10 ? time : ' ' + time; // Add a space for single-digit hours
}

// Weather daily data
// Weather hourly data
let hourlyTemps = data.hourly.map(hour => Math.round(hour.temp));

document.getElementById("wrapper-hour-now").innerHTML = hourlyTemps[0] + "°";
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
document.getElementById(
"wrapper-icon-tomorrow"
).src = iconFullyUrlTomorrow;

// Day after tomorrow
let iconCodeDAT = data.daily[1].weather[0].icon;
let iconFullyUrlDAT = iconBaseUrl + iconCodeDAT + iconFormat;
document.getElementById("wrapper-icon-dAT").src = iconFullyUrlDAT;

// Icons hourly

// Hour now
let iconHourNow = data.hourly[0].weather[0].icon;
let iconFullyUrlHourNow = iconBaseUrl + iconHourNow + iconFormat;
document.getElementById(
"wrapper-icon-hour-now"
).src = iconFullyUrlHourNow;

// Hour1
let iconHour1 = data.hourly[1].weather[0].icon;
let iconFullyUrlHour1 = iconBaseUrl + iconHour1 + iconFormat;
document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

// Hour2
let iconHour2 = data.hourly[2].weather[0].icon;
let iconFullyUrlHour2 = iconBaseUrl + iconHour2 + iconFormat;
document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour1;

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
    fetchWeatherData(65.8322, -45.5330);
});

document.getElementById("btnFredericton").addEventListener("click", function () {
    fetchWeatherData(45.9636, -66.6431);
});

document.getElementById("btnMoncton").addEventListener("click", function () {
    fetchWeatherData(-46.0878, 64.7782);
});

document.getElementById("btnStjohns").addEventListener("click", function () {
    fetchWeatherData(45.9636, 52.7453);
});

document.getElementById("btnHalifax").addEventListener("click", function () {
    fetchWeatherData(-44.6476, 63.5728);
});

document.getElementById("btnGreenwood").addEventListener("click", function () {
    fetchWeatherData(-44.9717, 64.9341);
});

document.getElementById("btnCharlottetown").addEventListener("click", function () {
    fetchWeatherData(-46.2382, 63.1311);
});

function fetchWeatherData(latitude, longitude, city) {
    // Update the API URL with the new latitude and longitude
    let file = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e`;

    // Rest of your existing fetch and weather data population code
    // ...

    // Update the search box with the city name
    document.getElementById('search-box').value = city;

    // Trigger the search button click
    document.getElementById('search-button').click();
}

//Function to execute search
function executeSearch() {
    const query = document.getElementById('search-box').value;
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  }

  document.getElementById('search-button').addEventListener('click', executeSearch);
  document.getElementById('search-box').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      executeSearch();
    }
  });

  function validateCity(city) {
    // List of cities in the Maritime provinces
    const maritimeCities = [
        // Cities in New Brunswick
        "Saint John", "Fredericton", "Moncton", "Bathurst", "Miramichi", "Edmundston", "Campbellton", "Woodstock", "Sussex", "Saint Andrews", "Hampton", "Oromocto", "St. Stephen",

        // Cities in Nova Scotia
        "Halifax", "Dartmouth", "Sydney", "Truro", "New Glasgow", "Glace Bay", "Kentville", "Wolfville", "Berwick", "Windsor", "Middleton", "Bridgetown", "Liverpool", "Antigonish", "Port Hawkesbury",

        // Cities in Prince Edward Island
        "Charlottetown", "Summerside", "Tignish", "O'Leary", "Tyne Valley", "Ellerslie", "Alberton", "St. Peters",

        // Cities in Newfoundland and Labrador
        "St. John's", "Mount Pearl", "Corner Brook", "Grand Falls-Windsor", "Gander", "Labrador City", "Happy Valley-Goose Bay", "Clarenville", "Bay Roberts", "Deer Lake", "Bonavista", "Twillingate", "Lewisporte", "Burgeo", "Port aux Basques"
    ];

    // Convert the entered city to title case for case-insensitive comparison
    const formattedCity = city.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

    // Check if the formatted city is in the list
    if (maritimeCities.includes(formattedCity)) {
        return true; // City is valid
    } else {
        alert("You must enter a city from NL, PEI, NS, or NB. Please ensure correct spelling!");
        return false; // City is not valid
    }
}
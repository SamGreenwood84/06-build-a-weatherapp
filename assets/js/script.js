// API Call and Main Weather Display
const queryUrl = "https://api.openweathermap.org/data/2.5/forecast?";
const apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
const lat = "lat=65.8322&";
const lon = "lon=45.5330&";
const apiOptions = "units=metric&exclude=minutely,alerts&";
const file = queryUrl + lat + lon + apiOptions + apiKey;

// Fetch main weather display data
fetch(file)
  .then((response) => response.json())
  .then((data) => {
    // Now data is defined within this scope
    const main = data.list[0].weather[0].main;
    const description = data.list[0].weather[0].description;
    const temp = Math.round(data.list[0].main.temp);
    const pressure = data.list[0].main.pressure;
    const humidity = data.list[0].main.humidity;
    const name = "Hampton";

    document.getElementById("wrapper-description").innerHTML = description;
    document.getElementById("wrapper-temp").innerHTML = temp + "°C";
    document.getElementById("wrapper-pressure").innerHTML = pressure;
    document.getElementById("wrapper-humidity").innerHTML = humidity;
    document.getElementById("wrapper-name").innerHTML = name;

    // Weather hourly data
    const hourlyTemps = data.list.slice(0, 6).map((hour) => Math.round(hour.main.temp));

    document.getElementById("wrapper-hour-now").innerHTML = hourlyTemps[0] + "°";
    document.getElementById("wrapper-hour1").innerHTML = hourlyTemps[1] + "°";
    document.getElementById("wrapper-hour2").innerHTML = hourlyTemps[2] + "°";
    document.getElementById("wrapper-hour3").innerHTML = hourlyTemps[3] + "°";
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });

// Time to am/pm 12-hour clock
const timeNow = new Date();
let hoursNow = timeNow.getHours();
const amPm = hoursNow >= 12 ? "AM" : "PM";
const formattedHoursNow = hoursNow % 12 || 12;

let time1 = formattedHoursNow + 1;
let time2 = time1 + (1 % 12) || 12;
let time3 = time2 + (1 % 12) || 12;

// Adjust AM/PM for the next hours
const amPm1 = time1 >= 12 ? "AM" : "PM";
const amPm2 = time2 >= 12 ? "AM" : "PM";
const amPm3 = time3 >= 12 ? "AM" : "PM";

document.getElementById("wrapper-time1").innerHTML = formatTime(time1) + " " + amPm1;
document.getElementById("wrapper-time2").innerHTML = formatTime(time2) + " " + amPm2;
document.getElementById("wrapper-time3").innerHTML = formatTime(time3) + " " + amPm3;

// Helper function to format time without leading zero
function formatTime(time) {
  return time >= 10 ? time : "0" + time;
}

// Function to get background image URL based on weather condition code
function getIconURL(iconCode) {
  const iconBaseUrl = "https://openweathermap.org/img/wn/";
  const iconFormat = ".webp";
  return `${iconBaseUrl}${iconCode}${iconFormat}`;
}

// 5 Day Forecast Icons
// Day 1
const iconCodeDay1 = data.list[0].weather[0].icon;
const iconFullyUrlDay1 = getIconURL(iconCodeDay1);
document.getElementById("wrapper-icon-day1").src = iconFullyUrlDay1;

// Day 2
const iconCodeDay2 = data.list[8].weather[0].icon;
const iconFullyUrlDay2 = getIconURL(iconCodeDay2);
document.getElementById("wrapper-icon-day2").src = iconFullyUrlDay2;

// Day 3
const iconCodeDay3 = data.list[16].weather[0].icon;
const iconFullyUrlDay3 = getIconURL(iconCodeDay3);
document.getElementById("wrapper-icon-day3").src = iconFullyUrlDay3;

// Day 4
const iconCodeDay4 = data.list[24].weather[0].icon;
const iconFullyUrlDay4 = getIconURL(iconCodeDay4);
document.getElementById("wrapper-icon-day4").src = iconFullyUrlDay4;

// Day 5
const iconCodeDay5 = data.list[32].weather[0].icon;
const iconFullyUrlDay5 = getIconURL(iconCodeDay5);
document.getElementById("wrapper-icon-day5").src = iconFullyUrlDay5;

// Hourly Forecast Icons
// Hour now
const iconHourNow = data.list[0].weather[0].icon;
const iconFullyUrlHourNow = getIconURL(iconHourNow);
document.getElementById("wrapper-icon-hourNow").src = iconFullyUrlHourNow;

// Hour1
const iconHour1 = data.list[1].weather[0].icon;
const iconFullyUrlHour1 = getIconURL(iconHour1);
document.getElementById("wrapper-icon-hour1").src = iconFullyUrlHour1;

// Hour2
const iconHour2 = data.list[2].weather[0].icon;
const iconFullyUrlHour2 = getIconURL(iconHour2);
document.getElementById("wrapper-icon-hour2").src = iconFullyUrlHour2;

// Hour3
const iconHour3 = data.list[3].weather[0].icon;
const iconFullyUrlHour3 = getIconURL(iconHour3);
document.getElementById("wrapper-icon-hour3").src = iconFullyUrlHour3;

// Function to update main background based on weather condition
function updateMainBackground(main) {
  const backgroundMappings = {
    "Snow": "snow.gif",
    "Clouds": "clouds.gif",
    "Fog": "fog.gif",
    "Rain": "rain.gif",
    "Clear": "clear.gif",
    "Thunderstorm": "thunderstorm.gif",
    "default": "clear.gif",
  };

  const backgroundImageURL = `https://mdbgo.io/ascensus/mdb-advanced/img/${backgroundMappings[main] || backgroundMappings["default"]}`;
  updateBackgroundImage(backgroundImageURL);
}

// Function to update background image
function updateBackgroundImage(imageUrl) {
  document.getElementById("wrapper-bg").style.backgroundImage = `url('${imageUrl}')`;
}

// Handle errors during the API call
function handleWeatherError(error) {
  console.error("Error fetching weather data:", error);
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
  const file = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e`;

  // Fetch weather data for the specified city
  fetch(file)
    .then((response) => response.json())
    .then((data) => {
      // Update weather data based on the chosen city
      const main = data.current.weather[0].main;
      const description = data.current.weather[0].description;
      const temp = Math.round(data.current.temp);
      const pressure = data.current.pressure;
      const humidity = data.current.humidity;
      const iconCode = data.current.weather[0].icon; // Get the icon code

      // Update the HTML elements with the new weather data
      document.getElementById("wrapper-description").innerHTML = description;
      document.getElementById("wrapper-temp").innerHTML = temp + "°C";
      document.getElementById("wrapper-pressure").innerHTML = pressure;
      document.getElementById("wrapper-humidity").innerHTML = humidity;
      document.getElementById("wrapper-name").innerHTML = city;

      // Backgrounds based on weather condition code (icon)
      updateBackgroundImage(getBackgroundImageURL(iconCode));

      // Update background on the main section based on current weather
      updateMainBackground(main);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

// Event listeners for city buttons
addCityButtonEventListener("btnHampton", 45.527, 65.8418, "Hampton");
addCityButtonEventListener("btnFredericton", 45.9636, 66.6431, "Fredericton");
addCityButtonEventListener("btnMoncton", 46.0878, 64.7782, "Moncton");
addCityButtonEventListener("btnStJohns", 47.5675, 52.7076, "St.Johns");
addCityButtonEventListener("btnHalifax", 44.6488, 63.5752, "Halifax");
addCityButtonEventListener("btnGreenwood", 44.9717, 64.9341, "Greenwood");
addCityButtonEventListener("btnCharlottetown", 46.2382, 63.1311, "Charlottetown");

function addCityButtonEventListener(cityId, latitude, longitude, cityName) {
  document.getElementById(cityId).addEventListener("click", function () {
    fetchWeatherData(latitude, longitude, cityName);
  });
}

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
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedTime = `${hours}:${formattedMinutes} ${amPm}`;

  // Display the formatted date, day of the week, and time in a specific container
  const dateTimeContainer = document.getElementById('datetime-container');
  const dateTimeElement = document.getElementById('date-time');

  dateTimeElement.textContent = `${dayOfWeek}, ${formattedDate} ${formattedTime}`;
}

document.addEventListener("DOMContentLoaded", function() {
  displayCurrentDateTime();
});

// Call the function when the page is loaded
window.onload = function() {
  displayCurrentDateTime();
  setInterval(displayCurrentDateTime, 60000); // Update every 1 minute
};

// Event listener for the search button
document.getElementById("search-btn").addEventListener("click", function () {
  // Get the user-input city from the input field
  const userInputCity = document.getElementById("city-input").value;

  // Fetch weather data for the entered city
  fetchWeatherForCity(userInputCity);
});

// Function to fetch weather data for a specific city
function fetchWeatherForCity(city) {
  // Check if the entered city is in the coordinates list
  if (cityCoordinates.hasOwnProperty(city)) {
    const { latitude, longitude } = cityCoordinates[city];

    // Fetch weather data for the specified city
    fetchWeatherData(latitude, longitude, city);
  } else {
    // Handle the case when the entered city is not in the coordinates list
    console.error("Invalid city entered:", city);
    // Display a message to the user or handle the error accordingly
  }
}

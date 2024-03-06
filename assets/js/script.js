// Function to fetch weather data based on coordinates and city
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
      let iconCode = data.current.weather[0].icon; // Get the icon code

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

      // Update hourly and daily weather data
      updateHourlyData(data);
      update3DayForecast(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function displayCurrentDateTime() {
  // Create a new Date object to get the current date and time
  const currentDate = new Date();

  // Get the day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
  const dateTimeContainer = document.getElementById("datetime-container");
  const dateTimeElement = document.getElementById("date-time");

  dateTimeElement.textContent = `${dayOfWeek}, ${formattedDate} ${formattedTime}`;
}

// Function to get the user's current location
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Extract the coordinates
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Fetch weather data based on user's location
        fetchWeatherData(latitude, longitude, "Outside it's...");
      },
      (error) => {
        console.error("Error getting user's location:", error);
        // If there's an error, you can fall back to a default city
        fetchWeatherData(45.527, 65.8418, "Hampton");
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    // If geolocation is not supported, fall back to a default city
    fetchWeatherData(45.527, 65.8418, "Hampton");
  }
}

// Call the function to get the user's location when the page is loaded
window.onload = function () {
  getUserLocation();
  displayCurrentDateTime();
  setInterval(displayCurrentDateTime, 60000); // Update every 1 minute
};

function updateHourlyData(data) {
  // Weather hourly data
  let hourlyData = data.hourly
    .slice(0, 3)
    .map((hour) => {
      const time = new Date(hour.dt * 1000); // Convert timestamp to Date object
      const formattedTime = formatTime(time.getHours());
      const temperature = Math.round(hour.temp);
      return { time: formattedTime, temperature };
    });

  // Update HTML elements with the new hourly data
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`wrapper-hour${i}`).innerHTML = `${hourlyData[i - 1].time} - ${hourlyData[i - 1].temperature}°`;
  }
}

function update3DayForecast(data) {
  // Weather daily data
  let dailyData = data.daily
    .slice(1, 4)
    .map((day) => {
      const timestamp = day.dt * 1000; // Convert timestamp to milliseconds
      const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(timestamp);
      const temperature = Math.round(day.temp.day);
      return { dayOfWeek, temperature };
    });

  // Update HTML elements with the new daily data
  for (let i = 1; i <= 3; i++) {
    document.getElementById(`wrapper-forecast-temp-day${i}`).innerHTML = `${dailyData[i - 1].dayOfWeek} - ${dailyData[i - 1].temperature}°`;
  }
}

// Helper function to format time without leading zero
function formatTime(time) {
  return time >= 10 ? time : "0" + time;
}

function getDayOfWeek(timestamp) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
  const dayIndex = date.getDay();

  return daysOfWeek[dayIndex];
}

// Inside the fetchWeatherData function
fetch(apiURL)
  .then(handleResponse)
  .then((data) => {
    updateWeatherData(data);
    updateHourlyData(data);
    update3DayForecast(data);
  })
  .catch(handleError);

// Weather hourly data
let hour1 = data.hourly[1].temp;
let hour2 = data.hourly[2].temp;
let hour3 = data.hourly[3].temp;

document.getElementById("wrapper-hour1").innerHTML = hour1 + "°";
document.getElementById("wrapper-hour2").innerHTML = hour2 + "°";
document.getElementById("wrapper-hour3").innerHTML = hour3 + "°";

// Time to am/pm 12 hour clock
let timeNow = new Date();
let hoursNow = timeNow.getHours();
let amPm = hoursNow >= 12 ? "AM" : "PM";
let formattedHoursNow = hoursNow % 12 || 12;

let time1 = time1 = (1 % 12) || 12;
let time2 = time2 + (1 % 12) || 12;
let time3 = time3 + (1 % 12) || 12;

// Adjust AM/PM for the next hours
let amPm1 = time1 >= 12 ? "AM" : "PM";
let amPm2 = time2 >= 12 ? "AM" : "PM";
let amPm3 = time3 >= 12 ? "AM" : "PM";

document.getElementById("wrapper-time1").innerHTML =
  formatTime(time1) + " " + amPm1;
document.getElementById("wrapper-time2").innerHTML =
  formatTime(time2) + " " + amPm2;
document.getElementById("wrapper-time3").innerHTML =
  formatTime(time3) + " " + amPm3;

// Helper function to format time without leading zero
function formatTime(time) {
  return time >= 10 ? time : "0" + time;
}

// Weather daily data & Weather hourly data
let hourlyTemps = data.hourly.map((hour) => Math.round(hour.temp));

document.getElementById("wrapper-hour1").innerHTML = hourlyTemps[1] + "°";
document.getElementById("wrapper-hour2").innerHTML = hourlyTemps[2] + "°";
document.getElementById("wrapper-hour3").innerHTML = hourlyTemps[3] + "°";

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
  const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=dbb76c5d98d5dbafcb94441c6a10236e`;

  fetch(apiURL)
    .then(handleResponse)
    .then(updateWeatherData)
    .catch(handleError);

  function handleResponse(response) {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  }

  function updateWeatherData(data) {
    if (data) {
      const currentWeather = data.current.weather[0];
      const main = currentWeather.main;
      const description = currentWeather.description;
      const temp = Math.round(data.current.temp);
      const pressure = data.current.pressure;
      const humidity = data.current.humidity;
      const iconCode = currentWeather.icon;

      // Update the HTML elements with the new weather data
      document.getElementById("wrapper-description").innerHTML = description;
      document.getElementById("wrapper-temp").innerHTML = `${temp}°C`;
      document.getElementById("wrapper-pressure").innerHTML = pressure;
      document.getElementById("wrapper-humidity").innerHTML = humidity;
      document.getElementById("wrapper-name").innerHTML = city;

      // Backgrounds based on weather condition code (icon)
      updateBackgroundImage(getBackgroundImageURL(iconCode));

      // Update background on the main section based on current weather
      updateMainBackground(main);

      // Update hourly and daily weather data
      updateHourlyData(data);
      update3DayForecast(data);
    } else {
      console.error("No data received from the API.");
    }
  }

  function handleError(error) {
    console.error("Error fetching weather data:", error);
  }
}

function handleCityButtonClick(city) {
  console.log(`Button clicked for ${city}`);

  // Check if the city coordinates are available
  if (cityCoordinates[city]) {
    const { latitude, longitude } = cityCoordinates[city];
    console.log(`Coordinates for ${city}: Lat ${latitude}, Lon ${longitude}`);

    // Update the search input with the city name
    document.getElementById("searchInput").value = city;

    // Fetch weather data for the specified city
    fetchWeatherData(latitude, longitude, city);
  } else {
    console.error(`Coordinates not available for ${city}`);
  }
}

// Event listeners for city buttons
document.getElementById("btnHampton").addEventListener("click", function () {
  handleCityButtonClick("Hampton");
});

document.getElementById("btnFredericton").addEventListener("click", function () {
  handleCityButtonClick("Fredericton");
});

document.getElementById("btnMoncton").addEventListener("click", function () {
  handleCityButtonClick("Moncton");
});

document.getElementById("btnStJohns").addEventListener("click", function () {
  handleCityButtonClick("St.Johns");
});

document.getElementById("btnHalifax").addEventListener("click", function () {
  handleCityButtonClick("Halifax");
});

document.getElementById("btnGreenwood").addEventListener("click", function () {
  handleCityButtonClick("Greenwood");
});

document.getElementById("btnCharlottetown").addEventListener("click", function () {
  handleCityButtonClick("Charlottetown");
});

// Search button event listener
document.getElementById("searchBtn").addEventListener("click", function () {
  const searchInput = document.getElementById("searchInput").value;
  fetchButtonData(searchInput);
});

// Function to get background image URL based on weather condition code
function getBackgroundImageURL(iconCode) {
  const iconBaseUrl = "https://openweathermap.org/img/wn/";
  const iconFormat = ".webp";
  return `${iconBaseUrl}${iconCode}${iconFormat}`;
}

// Function to update background image
function updateBackgroundImage(imageUrl) {
  document.getElementById(
    "wrapper-bg"
  ).style.backgroundImage = `url('${imageUrl}')`;
}

// Function to update main background based on weather condition
function updateMainBackground(main) {
  // Backgrounds
  switch (main) {
    case "Snow":
      document.getElementById("wrapper-bg").style.backgroundImage =
        "url('https://mdbgo.io/ascensus/mdb-advanced')";
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

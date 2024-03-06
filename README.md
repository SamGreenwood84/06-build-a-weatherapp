# 06-Challenge-Weather-Dashboard

## Server-Side APIs Challenge: Weather Dashboard

### User Story
AS an avid Maritime Traveller this USER needs to be able to know how to plan and pack appropriately according to the ever-changing weather forecast directly for the Maritimes

## Acceptance Criteria

WHEN the USER opens the application

THEN the USER will be asked to Allow the app to use their current location

WHEN the USER clicks allow 

THEN the data for their current location will display with including a message "Outside it's..." and the current weather description, temperature, pressure and humidity, day of the week, date and time

WHEN the USER scrolls down 

THEN displayed is the Hourly Forecast for the next 3 hours with the time and temperature

WHEN the user scrolls down again 

THEN the USER can type in any maritime city 

WHEN a new city is entered 

THEN the app will search for those coordinates and update the display accordingly

WHEN the USER looks just below the search bar

THEN displayed are 7 major cities in the Maritimes

WHEN the USER clicks on each city button 

THEN the app will update according to the user city selection

WHEN the USER scrolls to the very bottom

THEN the USER will see the next 3 day forecast for the corresponding city displaying the day of the week and the temperature

### City Buttons Coordinates

Reference-Google

Hampton, NB-45.5330° N, 65.8322° W

Fredericton, NB-45.9636° N, 66.6431° W

Moncton, NB-46.0878° N, 64.7782° W

St.Johns's, NL-47.5556° N, 52.7453° W

Halifax, NS-44.6476° N, 63.5728° W

Greenwood, NS-44.9717° N, 64.9341° W

Charlottetown, PEI-46.2382° N, 63.1311° W

Quebec City, QC-46.8131° N, 71.2075° W

### Site Design

![Alt text](assets/images/sitedesign.png)

W3Schools-[Glowing Text Reference](https://www.w3schools.com/howto/howto_css_glowing_text.asp)

```css
.glow {
  font-size: 80px;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}
```
### References

![Mock-up](assets/images/06-server-side-apis-homework-demo.png)

Pexels-[Blue Sky Background](www.pexels.com/search/blue%20sky/)
![Alt text](<assets/images/sky background.jpg>)

Web Dev Simplified-
[Build a Weather App With JavaScript](https://www.youtube.com/watch?v=OE7kml0pigw)

Adding functional search bar-
[How To Make A Search Bar Using HTML And CSS In 10 Just Minutes-](https://www.youtube.com/watch?v=9hnJsNIBq1g)

Google Fonts: [Sacramento](https://fonts.google.com/specimen/Sacramento?classification=Handwriting)
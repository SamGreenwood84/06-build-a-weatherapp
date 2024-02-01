# 06-Challenge-Weather-Dashboard
**Server-Side APIs Challenge: Weather Dashboard**

***User Story***

As someone who often travels for work the USER needs to be able to know how to plan and pack appropriately according to the weather forecast

***Acceptance Criteria***

User Story

As someone who often travels across the Maritimes for work the USER needs to be able to know how to plan and pack appropriately according to the weather forecast

WHEN the USER opens the site a default city will display with including date, time, and temperature

ALSO should display the next 5 day forecast for that city with a gif as background that is equal to the general weather forecast at the current time

THEN the USER can type in a city and change the display based on the weather in the city the user searched

WHEN the USER clicks on the city buttons 

THEN the site will search for those coordiantes automatically changing the site to display that city

# References

![Mock-up](assets/images/06-server-side-apis-homework-demo.png)

Pexels-[Blue Sky Background](www.pexels.com/search/blue%20sky/)
![Alt text](<assets/images/sky background.jpg>)

Web Dev Simplified-
[Build a Weather App With JavaScript](https://www.youtube.com/watch?v=OE7kml0pigw)

Adding functional search bar-
[How To Make A Search Bar Using HTML And CSS In 10 Just Minutes-](https://www.youtube.com/watch?v=9hnJsNIBq1g)

Google Fonts: [Sacramento](https://fonts.google.com/specimen/Sacramento?classification=Handwriting)

**City Buttons Coordinates**

Reference-Google

Hampton, NB-45.5330° N, 65.8322° W

Fredericton, NB-45.9636° N, 66.6431° W

Moncton, NB-46.0878° N, 64.7782° W

St.Johns's, NL-47.5556° N, 52.7453° W

Halifax, NS-44.6476° N, 63.5728° W

Greenwood, NS-44.9717° N, 64.9341° W

Charlottetown, PEI-46.2382° N, 63.1311° W

Quebec City, QC-46.8131° N, 71.2075° W

**Site Design**

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

# weather-forecast-app
A single-page app to display the weather forecast for the week.

Built as part of a coding challenge to match design requirements from Sketch file. The initial PDF design can be found [here](src/shared/static/WeatherApp.pdf). See the app in action [here](https://delightful-cascaron-24b3b4.netlify.app/)!

Current functionality includes...
- Data fetched from Open Weather Map API
- Support for imperial & metric
- Responsive to screen size changes

Future functionality:
1. Ability to select another city
    1. Clean "search" button next to current city name that would open an input field
    2. Type-to-search city name or zip code
    3. Backend process to lookup latitude & longitude for forecast API call
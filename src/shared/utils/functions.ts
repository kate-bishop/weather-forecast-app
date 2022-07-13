// API provides 5 days in 3-hour increments, so we need to grab only the 1st entry for each date.
export function processForecast(forecast: any[]) {
  let dailyWeather = []
  let currentDate = new Date()
  for (let i = 0; i < forecast.length; i++) {
      let newDate = new Date(forecast[i].dt_txt.substring(0, 10))
      if (newDate > currentDate) {
          dailyWeather.push(buildForecast(forecast[i], newDate))
          currentDate = newDate
      }
  }
  return dailyWeather
}

export function buildForecast(forecast: any, date: Date) {
  return {
      date: date,
      main: {
          temp: Math.round(forecast.main.temp),
          feels_like: Math.round(forecast.main.feels_like),
          temp_min: Math.round(forecast.main.temp_min),
          temp_max: Math.round(forecast.main.temp_max),
      },
      weather: {
          main: forecast.weather[0].main,
          description: forecast.weather[0].description.charAt(0).toUpperCase() + forecast.weather[0].description.slice(1),
      },
      wind: {
          speed: Math.round(forecast.wind.speed),
      }
  }
}

export function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}
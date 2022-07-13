const API_KEY = "5e09b0a0903cac624880eb2b5e700e08"
const EXCLUSIONS = "minutely,hourly"
export const LOCATION = "Dallas, TX"
export const LAT = "32.7767"
export const LON = "-96.7970"
export const WEEKDAY = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
export const SPEED_UNIT = {
  IMPERIAL: "mph",
  METRIC: "m/s",
}
export const UNIT = {
  IMPERIAL: "imperial",
  METRIC: "metric",
}
export const WEATHER = {
  CLEAR_SKY: "Clear sky",
  FEW_CLOUDS: "Few clouds",
  SCATTERED_CLOUDS: "Scattered clouds",
  BROKEN_CLOUDS: "Broken clouds",
  SHOWER_RAIN: "Shower rain",
  RAIN: "Rain",
  THUNDERSTORM: "Thunderstorm",
  SNOW: "Snow",
  MIST: "Mist",
}

export type Forecast = {
  date: Date,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
  },
  weather: {
    main: string,
    description: string,
  },
  wind: {
    speed: number,
  }
}


export async function getCurrent(lat: string, lon: string, unit: string) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&exclude=${EXCLUSIONS}&appid=${API_KEY}`);
    return await response.json();
  } catch (error) {
    return [];
  }
}

export async function getForecast(lat: string, lon: string, unit: string) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&exclude=${EXCLUSIONS}&appid=${API_KEY}`)
    return await response.json();
  } catch (error) {
    return [];
  }
}

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
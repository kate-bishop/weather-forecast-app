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

export const API_KEY = "5e09b0a0903cac624880eb2b5e700e08"
export const EXCLUSIONS = "minutely,hourly"

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
export const breakpoint = {
    small: 480,
    medium: 768,
    large: 1024,
}
export enum WindowSize {
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE,
} 
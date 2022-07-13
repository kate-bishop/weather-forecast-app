import { API_KEY, EXCLUSIONS } from './constants'

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

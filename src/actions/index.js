import axios from 'axios';

const WEATHER_API = 'https://weathervane-api.herokuapp.com';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const request = axios.get(`${WEATHER_API}/forecast?city=${city}`);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

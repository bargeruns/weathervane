import axios from 'axios';

const API_KEY = 'e4b296018d02fb8367ecba87ebe2bce6';
const URL = `http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${URL}&q=${city},us&units=imperial`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

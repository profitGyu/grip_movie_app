import { axios } from 'hooks/worker'
import { IWeatherAPIRes } from 'types/weather.d'

const WEATHER_BASE_URL = 'https://weatherbit-v1-mashape.p.rapidapi.com'

interface Params {
  lat: number
  lon: number
}

// 37.494958, 126.844128
export const getWeatherApi = (params: Params) =>
  axios.get<IWeatherAPIRes>(`${WEATHER_BASE_URL}/forecast/3hourly`, {
    headers: {
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      'X-RapidAPI-Key': 'de2d96c43amsh6af4cd08154b413p17522ejsn6ca5059d55bc',
    },
    params,
  })

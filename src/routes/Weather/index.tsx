import dayjs from 'dayjs'
import styles from './Weather.module.scss'

import { useMount, useState } from 'hooks'
import { getWeatherApi } from 'services/weather'
import { IWeatherAPIRes } from 'types/weather.d'
import { getWeatherIcon } from 'utils/weather'

const Weather = () => {
  const [data, setData] = useState<IWeatherAPIRes>()

  useMount(() => {
    getWeatherApi({
      lat: 37.494958,
      lon: 126.844128,
    }).then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  })

  if (!data) return null

  return (
    <section className={styles.weather}>
      <h1>{data.city_name}</h1>
      <ul>
        {data.data.map((item) => {
          const WeatherIcon = getWeatherIcon(item.weather.description)
          return (
            <li key={item.timestamp_utc}>
              <dl>
                <div>
                  <dt>온도</dt>
                  <dd>
                    {item.temp}
                    <sup>℃</sup>
                  </dd>
                </div>
                <div>
                  <dt>시간</dt>
                  <dd>{dayjs(item.timestamp_utc).format('YYYY-MM-DD')}</dd>
                </div>
                <div>
                  <dt>날씨</dt>
                  <dd>
                    <WeatherIcon />
                  </dd>
                </div>
              </dl>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Weather

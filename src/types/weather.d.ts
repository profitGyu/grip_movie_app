interface IWeatherDataItem {
  app_temp: number
  clouds: number
  clouds_hi: number
  clouds_low: number
  clouds_mid: number
  datetime: string
  dewpt: number
  dhi: number
  dni: number
  ghi: number
  ozone: number
  pod: string
  pop: number
  precip: number
  pres: number
  rh: number
  slp: number
  snow: number
  snow_depth: number
  solar_rad: number
  temp: number
  timestamp_local: string
  timestamp_utc: string
  ts: number
  uv: number
  vis: number
  weather: {
    icon: string
    code: number
    description: string
  }
  wind_cdir: string
  wind_cdir_full: string
  wind_dir: number
  wind_gust_spd: number
  wind_spd: number
}

export interface IWeatherAPIRes {
  city_name: string
  country_code: string
  data: IWeatherDataItem[]
  lat: number
  lon: number
  state_code: string
  timezone: string
}

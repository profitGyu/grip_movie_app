import { CloudIcon } from 'assets/svgs/weather'

export const getWeatherIcon = (desc: string) => {
  let weatherIconName = CloudIcon
  switch (desc) {
    case 'Overcast clouds':
      weatherIconName = CloudIcon
      break
    default:
      break
  }

  return weatherIconName
}

import consola from 'consola'

interface WeatherToPrint {
  city: string
  tempC: number
  localtime: string
}

export function showCurrentWeather({ city, localtime, tempC }: WeatherToPrint) {
  consola.box(`Город: ${city}
      Температура: ${tempC}°C
      Время: ${localtime}`)
}

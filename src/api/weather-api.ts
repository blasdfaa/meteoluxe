import { ofetch } from 'ofetch'
import type { WeatherCurrent, WeatherLocation } from '../types/weather'

const API_URL = 'http://api.weatherapi.com/v1/'

export function fetchCurrentWeather(query: string, token: string) {
  const url = new URL('current.json', API_URL).href
  return ofetch<{ location: WeatherLocation; current: WeatherCurrent }>(url, { params: { key: token, q: query } })
}

#! /usr/bin/env node
import { defineCommand, runMain } from 'citty'
import { consola } from 'consola'
import { readConfig, updateConfig } from './utils/config-utils'
import { fetchCurrentWeather } from './api/weather-api'
import { showCurrentWeather } from './utils/print-utils'

const DEFAULT_LOCATION = 'Moscow'

const main = defineCommand({
  meta: {
    name: 'meteolux',
    version: '1.0.0',
    description: 'CLI for checking weather',
  },
  args: {
    state: {
      alias: ['s', 'S'],
      type: 'string',
      description: 'Set name of your city',
    },
    token: {
      alias: ['t', 'T'],
      type: 'string',
      description: 'Set API key. Get a key - https://www.weatherapi.com/my/ (registration required)',
    },
  },
  async run({ args }) {
    if (args.state || args.token) {
      updateConfig({ state: args.state, token: args.token })
      consola.info('Config updated')
      return
    }

    const config = readConfig()

    if (!config.token) {
      consola.error('API key is not provided. Use -h or --help to bring up documentation.')
      return
    }

    const state = (config.state as string) ?? DEFAULT_LOCATION
    const token = config.token as string
    await fetchCurrentWeather(state, token)
      .then(({ current, location }) => showCurrentWeather({ city: location.name, localtime: location.localtime, tempC: current.temp_c }))
      .catch(err => consola.error(err.data?.error?.message ?? 'Unknown error'))
  },
})

runMain(main)

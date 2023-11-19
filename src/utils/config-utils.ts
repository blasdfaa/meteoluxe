import { homedir } from 'node:os'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import defu from 'defu'

const CONFIG_FILENAME = 'mlconfig.json'
const CONFIG_PATH = resolve(homedir(), CONFIG_FILENAME)

type Config = Record<string, unknown>

export function readConfig() {
  if (!existsSync(CONFIG_PATH))
    return {} as Config

  return JSON.parse(readFileSync(CONFIG_PATH, 'utf-8')) as Config
}

export function writeConfig(config: Config) {
  writeFileSync(CONFIG_PATH, JSON.stringify(config), 'utf-8')
}

export function updateConfig(config: Config) {
  const newConfig = defu(config, readConfig())
  writeConfig(newConfig)
}

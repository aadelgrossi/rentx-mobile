import Constants from 'expo-constants'

interface EnvConfig {
  [key: string]: {
    apiHost: string
  }
}

const environments: EnvConfig = {
  dev: {
    apiHost: (process.env.API_URL as string) || 'http://localhost:3333/graphql'
  },
  default: {
    apiHost: process.env.API_URL as string
  }
}

const env = Constants.manifest?.releaseChannel || 'dev'

export const config = environments[env]

import Constants from 'expo-constants'

interface EnvConfig {
  [key: string]: {
    apiHost: string
  }
}

const environments: EnvConfig = {
  dev: {
    apiHost: 'http://localhost:3333/graphql'
  },
  prod: {
    apiHost: process.env.API_URL as string
  }
}

const env = Constants.manifest.releaseChannel || 'dev'

export const config = environments[env]

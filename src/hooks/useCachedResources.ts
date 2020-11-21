import { useState, useEffect } from 'react'

import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

const useCachedResources = (): boolean => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'archivo-500': require('../../assets/fonts/Archivo-Medium.ttf'),
          'archivo-600': require('../../assets/fonts/Archivo-SemiBold.ttf'),
          'archivo-700': require('../../assets/fonts/Archivo-Bold.ttf'),
          'inter-400': require('../../assets/fonts/Inter-Regular.ttf'),
          'inter-500': require('../../assets/fonts/Inter-Medium.ttf'),
          'inter-600': require('../../assets/fonts/Inter-SemiBold.ttf'),
          'rent-icons': require('../../assets/fonts/RentIcons.ttf')
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}

export default useCachedResources

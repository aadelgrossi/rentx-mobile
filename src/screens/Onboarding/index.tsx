import React, { useCallback } from 'react'

import { StackNavigationProp } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { Dimensions } from 'react-native'
import Onboard from 'react-native-onboarding-swiper'
import { usePersistStorage } from 'react-native-use-persist-storage'

import { NextButton } from '~/components'
import { ONBOARDING_STEPS_KEY } from '~/constants/async_storage_keys'
import { InitialRoutesParamList } from '~/navigation/types'

import { pages } from './pages'
import { Container } from './styles'

interface OnboardingNavigationProps {
  navigation: StackNavigationProp<InitialRoutesParamList, 'Onboarding'>
}

export const Onboarding: React.FC<OnboardingNavigationProps> = ({
  navigation
}) => {
  const [_, setHasRunBefore] = usePersistStorage<boolean>(
    ONBOARDING_STEPS_KEY,
    false
  )

  const handleDone = useCallback(async () => {
    setHasRunBefore(true)
    navigation.navigate('Welcome')
  }, [navigation, setHasRunBefore])

  return (
    <Container>
      <Onboard
        pages={pages}
        showSkip={false}
        controlStatusBar={false}
        bottomBarStyles={{
          width: Dimensions.get('screen').width - 16,
          paddingHorizontal: 16
        }}
        bottomBarHighlight={false}
        bottomBarHeight={80}
        NextButtonComponent={NextButton}
        DoneButtonComponent={NextButton}
        onDone={handleDone}
      />
      <StatusBar style="dark" />
    </Container>
  )
}

export * from './SelectDate'

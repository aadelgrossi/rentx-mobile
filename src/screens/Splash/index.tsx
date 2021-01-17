import React, { useEffect, useState } from 'react'

import { Animated } from 'react-native'

import fullLogo from '~/assets/logo/full.png'
import rentxSymbol from '~/assets/logo/symbol.png'

import { Container, AnimatedImage, LogoContainer } from './styles'

const Splash: React.FC = () => {
  const [symbolOpacity] = useState(new Animated.Value(0))
  const [fullLogoOpacity] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.sequence([
      Animated.timing(symbolOpacity, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true
      }),

      Animated.timing(symbolOpacity, {
        toValue: 0,
        delay: 1500,
        duration: 500,
        useNativeDriver: true
      }),

      Animated.timing(fullLogoOpacity, {
        toValue: 1,
        delay: 500,
        duration: 1000,
        useNativeDriver: true
      }),

      Animated.timing(fullLogoOpacity, {
        toValue: 0,
        delay: 1800,
        duration: 500,
        useNativeDriver: true
      })
    ]).start()
  }, [symbolOpacity, fullLogoOpacity])

  return (
    <Container>
      <LogoContainer>
        <AnimatedImage
          source={rentxSymbol}
          style={{ opacity: symbolOpacity }}
        />
        <AnimatedImage source={fullLogo} style={{ opacity: fullLogoOpacity }} />
      </LogoContainer>
    </Container>
  )
}

export default Splash

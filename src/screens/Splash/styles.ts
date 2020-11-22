import { Animated, Platform, StatusBar } from 'react-native'
import styled from 'styled-components/native'

import colors from '../../styles/colors'

const heightScreen = StatusBar.currentHeight || 0

export const Container = styled.SafeAreaView.attrs({
  paddingTop: Platform.OS === 'android' ? heightScreen : 0
})`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black};
`

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const AnimatedImage = styled(Animated.Image)`
  position: absolute;
`

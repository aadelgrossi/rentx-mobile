import { AnimatedCircularProgress } from 'react-native-circular-progress'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import colors from '~/styles/colors'

import { RentIcon } from '../RentIcon'

export const Container = styled.View``

export const SwitchPicture = styled(RectButton)`
  bottom: 0px;
  right: 20px;
  background-color: ${colors.red};
  position: absolute;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(RentIcon).attrs({
  name: 'photo',
  color: colors.white,
  size: 24
})``

export const UploadProgress = styled(AnimatedCircularProgress).attrs({
  size: 192,
  duration: 400,
  rotation: 0,
  width: 6,
  backgroundColor: 'transparent'
})`
  position: absolute;
  top: -6px;
  right: -6px;
`

import { Image } from 'react-native-expo-image-cache'
import styled, { css } from 'styled-components/native'

import colors from '~/styles/colors'

import { RentIcon } from '../RentIcon'

const imageProps = css`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`

export const Avatar = styled(Image)`
  ${imageProps}
`

export const PreviewImage = styled.Image`
  ${imageProps}
`

export const Placeholder = styled.View`
  width: 180px;
  height: 180px;
  background-color: ${colors.grayLightest};
  border-radius: 90px;
  align-items: center;
  justify-content: center;
`

export const Icon = styled(RentIcon).attrs({
  color: colors.grayLight,
  size: 100
})``

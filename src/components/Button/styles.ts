import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import colors from '~/styles/colors'

interface Props {
  variant: boolean
}

export const Container = styled(RectButton)<Props>`
  background-color: ${props =>
    props.variant ? colors.lightBlack : colors.red};
  justify-content: center;
  align-items: center;
  padding: 0 32px;
  height: 56px;
`

export const ButtonText = styled.Text`
  font-family: 'archivo-500';
  font-size: 15px;
  color: ${colors.white};
`

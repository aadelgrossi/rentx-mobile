import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import colors from '../../styles/colors'

interface Props {
  variant: boolean
}

export const Container = styled(RectButton)<Props>`
  width: 100%;
  background-color: ${props =>
    props.variant ? colors.lightBlack : colors.red};
  justify-content: center;
  align-items: center;
  height: 56px;
`

export const ButtonText = styled.Text`
  font-family: 'archivo-500';
  font-size: 15px;
  color: ${colors.white};
`

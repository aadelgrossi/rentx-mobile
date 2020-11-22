import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.black};
`

export const Contents = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 160px;
`

export const Title = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-size: 40px;
  margin-top: 160px;
  margin-bottom: 40px;
  font-family: 'archivo-600';
`

export const Text = styled.Text`
  font-family: 'inter-400';
  font-size: 16px;
  color: ${colors.grayLight};
`

export const Actions = styled.View`
  position: absolute;
  bottom: 100px;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
`

export const ButtonText = styled.Text`
  font-family: 'inter-600';
  font-size: 16px;
  color: ${colors.white};
`

const buttonCss = css`
  width: 156px;
  height: 65px;
  align-items: center;
  justify-content: center;
`

export const LogInButton = styled(RectButton)`
  ${buttonCss}
  background-color: ${colors.red};
`

export const SignUpButton = styled(RectButton)`
  ${buttonCss}
  background-color: ${colors.lightBlack};
`

export const BackButton = styled(RectButton)`
  position: absolute;
  bottom: 60px;
`

export const BackButtonText = styled.Text`
  font-family: 'archivo-500';
  font-size: 15px;
  color: ${colors.grayText};
`

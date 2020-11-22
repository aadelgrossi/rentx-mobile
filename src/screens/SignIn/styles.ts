import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: center;
`

export const Contents = styled.View`
  margin: 0 24px;
`

export const Title = styled.Text`
  font-family: 'archivo-600';
  font-size: 40px;
  margin-top: 60px;
  color: ${colors.lightBlack};
`

export const SignInText = styled.Text`
  font-family: 'inter-500';
  width: 260px;
  font-size: 15px;
  color: ${colors.grayText};
  margin-top: 20px;
`

export const Form = styled.View`
  margin-top: 100px;
  width: 100%;
`

export const Input = styled.TextInput`
  flex: 1;
  background-color: ${colors.grayTertiary};
`

export const RememberAndForgotPasswordWrapper = styled.View`
  flex-direction: row;
  margin: 20px 0 40px;
  align-items: center;
`

export const ForgotPassword = styled.TouchableOpacity``

export const ForgotPasswordText = styled.Text`
  color: ${colors.grayText};
  font-family: 'inter-400';
  font-size: 13px;
`

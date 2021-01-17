import styled from 'styled-components/native'

import colors from '~/styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`

export const Contents = styled.View`
  margin: 0 24px;
`

export const Title = styled.Text`
  font-family: 'archivo-600';
  font-size: 40px;
  margin-top: 10px;
  color: ${colors.lightBlack};
`

export const SignInText = styled.Text`
  font-family: 'inter-500';
  width: 260px;
  font-size: 15px;
  color: ${colors.grayText};
  margin-top: 20px;
`

export const Form = styled.View``

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

export const ErrorContainer = styled.View`
  margin-top: 40px;
  min-height: 45px;
  align-items: flex-end;
`

export const Error = styled.Text`
  color: ${colors.red};
`

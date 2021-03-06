import styled from 'styled-components/native'

import colors from '~/styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  flex-direction: column;
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

export const SignUpText = styled.Text`
  font-family: 'inter-500';
  width: 200px;
  font-size: 15px;
  color: ${colors.grayText};
  margin-top: 20px;
`

export const Form = styled.View`
  margin-top: 40px;
  width: 100%;
`

export const FormGroupTitleAndError = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`

export const ErrorContainer = styled.View`
  align-items: flex-end;
  justify-content: center;
`

export const Error = styled.Text`
  color: ${colors.red};
`

export const StepItemText = styled.Text`
  font-family: 'archivo-500';
  font-size: 20px;
  color: ${colors.lightBlack};
`

import { Dimensions } from 'react-native'
import styled, { css } from 'styled-components/native'

import colors from '~/styles/colors'

interface DateValueProps {
  filled: boolean
}

export const Container = styled.View`
  flex: 1;
`
export const DarkSection = styled.View`
  background-color: ${colors.black};
  padding: 64px 24px 48px;
  height: ${Dimensions.get('screen').height / 2.6}px;
`
export const Title = styled.Text`
  font-family: 'archivo-600';
  font-size: 35px;
  line-height: 36px;
  width: 250px;
  margin: 40px 0;
  color: ${colors.white};
`
export const DateContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  justify-content: space-between;
`

export const Label = styled.Text`
  font-size: 10px;
  font-family: 'archivo-500';
  color: ${colors.grayAccent};
  text-transform: uppercase;
`
export const DateWrapper = styled.View<DateValueProps>`
  flex-direction: column;
  justify-content: space-between;
  min-width: 130px;
  height: 40px;
  align-items: flex-start;

  ${props =>
    !props.filled &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${colors.grayText};
    `}
`

export const DateValue = styled.Text`
  font-family: 'inter-500';
  font-size: 15px;
  color: ${colors.white};
`

export const LightSection = styled.View`
  flex: 1;
  padding: 48px 24px 24px;
  background-color: ${colors.white};
  justify-content: space-between;
`

export const Button = styled.TouchableOpacity`
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.disabled ? colors.hoverRed : colors.red)};
  margin-top: auto;
`

export const ButtonText = styled.Text`
  font-family: 'inter-500';
  font-size: 15px;
  color: ${colors.white};
`

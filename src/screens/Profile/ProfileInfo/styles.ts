import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import Button from '../../../components/Button'
import colors from '../../../styles/colors'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`

export const Spacing = styled.View`
  background-color: ${colors.black};
  height: 100px;
`

export const Contents = styled.View`
  flex: 1;
  padding: 0 24px;
`

export const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 20px;
`

export const ProfilePicture = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin-top: -90px;
`

export const SwitchPicture = styled(RectButton)`
  margin-top: -40px;
  margin-left: 100px;
  background-color: ${colors.red};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: auto;
`

export const TabBarTitle = styled.Text<{ focused: boolean }>`
  font-size: 18px;
  padding: 0 20px;
  font-family: ${props => (props.focused ? 'archivo-600' : 'archivo-500')};
  color: ${props => (props.focused ? colors.lightBlack : colors.grayText)};
`

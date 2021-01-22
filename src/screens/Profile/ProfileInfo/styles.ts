import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import { Button } from '~/components'
import colors from '~/styles/colors'

export const Container = styled.ScrollView`
  background-color: ${colors.white};
`

export const Spacing = styled.View`
  background-color: ${colors.black};
  height: 100px;
`

export const Contents = styled.View`
  padding: 24px 24px;
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

export const SubmitButton = styled(Button)``

export const TabBarTitle = styled.Text<{ focused: boolean }>`
  font-size: 18px;
  font-family: ${props => (props.focused ? 'archivo-600' : 'archivo-500')};
  color: ${props => (props.focused ? colors.lightBlack : colors.grayText)};
`

import styled from 'styled-components/native'

import { Button } from '~/components'
import colors from '~/styles/colors'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
`

export const Spacing = styled.View`
  background-color: ${colors.black};
  height: 120px;
`

export const Contents = styled.View`
  margin-top: -90px;
`

export const ProfileContainer = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 20px;
`

export const SubmitButton = styled(Button)``

export const TabBarTitle = styled.Text<{ focused: boolean }>`
  font-size: 18px;
  font-family: ${props => (props.focused ? 'archivo-600' : 'archivo-500')};
  color: ${props => (props.focused ? colors.lightBlack : colors.grayText)};
`

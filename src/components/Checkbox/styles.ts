import styled from 'styled-components/native'

import colors from '~/styles/colors'

interface CheckboxProps {
  checked: boolean
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`

export const Checkbox = styled.TouchableOpacity<CheckboxProps>`
  width: 20px;
  height: 20px;
  background-color: ${colors.grayLighter};
  border: ${({ checked }) => (checked ? `6px solid ${colors.black}` : 'none')};
`

export const CheckboxText = styled.Text`
  color: ${colors.grayText};
  font-size: 15px;
  margin-left: 10px;
`

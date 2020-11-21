import styled from 'styled-components/native'

import Colors from '../../constants/Colors'

export const Container = styled.View`
  position: relative;
`

export const ActiveDetail = styled.View`
  position: absolute;
  background-color: ${Colors.accent};
  width: 6px;
  height: 3px;
  bottom: -6px;
  right: 12px;
`

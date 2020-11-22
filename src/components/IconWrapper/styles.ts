import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.View`
  position: relative;
`

export const ActiveDetail = styled.View`
  position: absolute;
  background-color: ${colors.red};
  width: 6px;
  height: 3px;
  bottom: -6px;
  right: 12px;
`

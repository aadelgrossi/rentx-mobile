import styled from 'styled-components/native'

import colors from '~/styles/colors'

export const Container = styled.View`
  background-color: ${colors.white};
  width: 32px;
  height: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Line = styled.View`
  height: 10px;
  width: 1px;
  background-color: ${colors.grayAccent};
  margin: 0 4px;
`

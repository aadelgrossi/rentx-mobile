import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  padding: 64px 32px 0;
  background-color: ${colors.black};
  flex-direction: column;
  width: 100%;
`

export const Header = styled.Text`
  font-family: 'archivo-600';
  font-size: 25px;
  color: ${colors.white};
`

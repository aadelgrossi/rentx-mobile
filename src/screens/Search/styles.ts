import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.white};
`

export const Header = styled.View`
  height: 142px;
  background-color: ${colors.black};
  padding: 64px 32px 0;
`

export const Title = styled.Text`
  font-family: 'archivo-600';
  font-size: 25px;
  color: ${colors.white};
`

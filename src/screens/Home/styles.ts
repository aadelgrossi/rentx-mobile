import styled from 'styled-components/native'

import Colors from '../../constants/Colors'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  padding: 64px 32px 0;
  background-color: ${Colors.black};
  flex-direction: column;
  width: 100%;
`

export const Header = styled.Text`
  font-family: 'archivo-600';
  font-size: 25px;
  color: ${Colors.text};
`

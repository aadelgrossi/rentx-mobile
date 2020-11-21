import styled from 'styled-components/native'

import Colors from '../../constants/Colors'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  background-color: ${Colors.background};
`

export const Header = styled.View`
  height: 142px;
  background-color: ${Colors.black};
  padding: 64px 32px 0;
`

export const Title = styled.Text`
  font-family: 'archivo-600';
  font-size: 25px;
  color: ${Colors.text};
`

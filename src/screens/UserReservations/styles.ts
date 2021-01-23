import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import colors from '~/styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  flex-direction: column;
  width: 100%;
  background-color: ${colors.white};
`

export const Header = styled.View`
  height: 128px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${colors.black};
  padding: 64px 32px 32px;
`

export const Title = styled.Text`
  font-family: 'archivo-600';
  font-size: 25px;
  color: ${colors.white};
`

export const ResultsCount = styled.Text`
  font-family: 'inter-400';
  color: ${colors.grayText};
  font-size: 13px;
`

export const Content = styled.View`
  margin: 16px 16px 0;
`

export const RentalsList = styled(FlatList as new () => FlatList<Rental>)``

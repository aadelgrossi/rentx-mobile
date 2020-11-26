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
  height: 100px;
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

export const RentalsList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false
})`
  margin: 0 16px;
`

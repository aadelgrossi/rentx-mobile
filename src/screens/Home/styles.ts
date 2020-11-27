import { FlatList } from 'react-native'
import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${colors.white};
`

export const DateRangeHeader = styled.View`
  height: 120px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: ${colors.black};
  padding: 64px 24px 32px;
`

export const Label = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'archivo-500';
  color: ${colors.grayAccent};
`

export const DateContainer = styled.View``

export const DateContent = styled.Text`
  font-family: 'inter-500';
  font-size: 15px;
  color: ${colors.white};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 25px 25px;
`

export const Title = styled.Text`
  font-family: 'archivo-600';
  font-size: 25px;
  color: ${colors.black};
  margin-right: auto;
`

export const ResultsCount = styled.Text`
  font-family: 'inter-400';
  color: ${colors.grayAccent};
  font-size: 13px;
  margin-right: 32px;
`

export const SearchResults = styled(FlatList as new () => FlatList<Car>)`
  padding: 0 16px;
`

export const FilterContainer = styled.View`
  padding: 16px 32px 32px;
  background-color: ${colors.white};
  margin-top: auto;
`

export const FilterModalTopDetail = styled.View`
  width: 48px;
  border-radius: 100px;
  background-color: ${colors.grayLighter};
  height: 4px;
  margin-bottom: 32px;
  align-self: center;
`

export const FilterHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const FilterClearButton = styled.TouchableOpacity``

export const FilterClearText = styled.Text`
  font-size: 15px;
  color: ${colors.grayAccent};
  font-family: 'inter-500';
`

export const Separator = styled.View`
  height: 1px;
  margin: 24px 0;
  background-color: ${colors.grayLighter};
`

export const PriceIndicator = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const PriceRange = styled.Text`
  color: ${colors.red};
  font-family: 'inter-500';
  font-size: 15px;
`

export const FilterItem = styled.View`
  margin-bottom: 24px;
  justify-content: center;
`

export const FilterItemTitle = styled.Text`
  font-family: 'archivo-500';
  font-size: 20px;
  color: ${colors.black};
`

export const SubmitFilters = styled.TouchableOpacity`
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.red};
  margin-top: 16px;
`

export const SubmitFiltersText = styled.Text`
  font-family: 'archivo-500';
  font-size: 15px;
  color: ${colors.white};
`

export const FilterOptionSelect = styled.View`
  flex-direction: row;
  margin-top: 16px;
  background-color: ${colors.grayLightest};
`

export const TransmissionTypeSelect = styled(FilterOptionSelect)`
  height: 56px;
`

export const FuelTypeSelect = styled(FilterOptionSelect)`
  height: 74px;
`

export const OptionButton = styled.TouchableOpacity<{ active: boolean }>`
  align-items: center;
  flex: 1;
  justify-content: center;
  background-color: ${props =>
    props.active ? colors.white : colors.grayLightest};
  margin: 4px;
`

export const OptionText = styled.Text`
  color: ${colors.grayPrimary};
  font-size: 15px;
  font-family: 'inter-500';
  text-transform: capitalize;
`

export const FuelOptionText = styled(OptionText)`
  margin-top: 4px;
`

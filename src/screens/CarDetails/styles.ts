import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${colors.white};
  justify-content: space-between;
`

export const BackIcon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-left',
  size: 28,
  color: colors.grayAccent
})``

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
  position: absolute;
  top: 32px;
  left: 16px;
  align-items: center;
  justify-content: center;
`

export const Item = styled.View``

export const CarPhoto = styled.Image`
  height: 160px;
  margin: 48px 72px 0;
`

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 12px 8px;
  align-items: center;
`

export const Label = styled.Text`
  font-size: 10px;
  font-family: 'archivo-500';
  color: ${colors.grayAccent};
  text-transform: uppercase;
`

export const InfoValue = styled.Text`
  font-size: 25px;
  font-family: 'archivo-500';
`

export const CarTitle = styled(InfoValue)`
  color: ${colors.grayPrimary};
`

export const CarRate = styled(InfoValue)`
  color: ${colors.red};
`

export const DateItem = styled(InfoValue)`
  font-size: 15px;
  color: ${colors.red};
  font-family: 'inter-500';
`

export const TotalPrice = styled(CarTitle)``

export const SubTotal = styled.Text`
  font-size: 15px;
  font-family: 'inter-500';
  color: ${colors.grayPrimary};
`

export const SubtotalContainer = styled.View`
  background-color: ${colors.grayLightest};
  padding: 24px;
`

export const SubTotalSection = styled(Section)`
  margin: 0 0 16px;
`

export const SpecificationsContainer = styled(
  FlatList as new () => FlatList<CarSpec>
).attrs({
  numColumns: 3,
  contentContainerStyle: {
    justifyContent: 'center'
  }
})`
  margin: 0 12px;
`

export const DatesSection = styled(Section)`
  margin: 8px 12px 0;
`

export const SpecItemContainer = styled.View`
  background-color: ${colors.grayLightest};
  align-items: center;
  margin: 4px;
  padding: 10px 0;
  width: ${Dimensions.get('window').width / 3 - 16}px;
  height: 90px;
  justify-content: space-evenly;
`

export const SpecItemText = styled.Text`
  color: ${colors.grayText};
  font-size: 13px;
  font-family: 'inter-500';
  text-align: center;
`

import { MaterialIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import { RentIcon } from '~/components'
import colors from '~/styles/colors'

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${colors.white};
`

export const BackIcon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-left',
  size: 36,
  color: colors.grayAccent
})``

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  width: 80px;
  height: 80px;
  z-index: 5;
  top: 30px;
  left: 8px;
  align-items: center;
  justify-content: center;
`

export const Item = styled.View``

export const CarPhoto = styled.Image`
  height: ${Dimensions.get('screen').height / 3.8}px;
  margin: 100px 12px 0;
`

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 12px 24px;
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
  line-height: 32px;
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
  line-height: 24px;
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
  margin: 0 0 32px;
`

export const SpecificationsContainer = styled(
  FlatList as new () => FlatList<CarSpec>
).attrs({
  numColumns: 3,
  contentContainerStyle: {
    marginTop: 'auto'
  }
})`
  margin: 0 12px 32px;
`

export const DatesSection = styled(Section)`
  margin: 24px 12px 0;
`

export const SpecItemContainer = styled.View`
  background-color: ${colors.grayLightest};
  align-items: center;
  margin: 4px;
  padding: 10px 0;
  width: ${Dimensions.get('window').width / 3 - 16}px;
  height: 100px;
  justify-content: space-evenly;
`

export const SpecItemText = styled.Text`
  color: ${colors.grayText};
  font-size: 13px;
  font-family: 'inter-500';
  text-align: center;
`

export const SpecIcon = styled(RentIcon).attrs({
  color: colors.grayPrimary
})``

export const Arrow = styled(RentIcon).attrs({
  name: 'arrow-right',
  color: colors.grayAccent,
  size: 15
})``

import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

import colors from '../../../styles/colors'

export const DetailsContainer = styled.View`
  width: 100%;
  height: 128px;
  background-color: ${colors.grayLightest};
  padding: 10px 20px 10px;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
`

export const DateInfoContainer = styled.View<{ isOnGoingReservation: boolean }>`
  height: 40px;
  background-color: ${props =>
    props.isOnGoingReservation ? colors.hoverGreen : colors.grayLightest};
  margin-top: 3px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 20px;
`

export const Info = styled.View`
  margin-right: 20px;
  width: 120px;
`
export const ModelInfo = styled.View``

export const Label = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'archivo-500';
  color: ${colors.grayAccent};
`

export const CarModel = styled.Text`
  font-family: 'archivo-600';
  font-size: 15px;
  color: ${colors.black};
`

export const AddInfo = styled.View`
  margin-top: 10px;
`

export const AddInfoContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
`
export const TotalValue = styled.Text`
  font-size: 15px;
  font-family: 'archivo-500';
  color: ${colors.red};
  margin-right: 20px;
`

export const CarPhoto = styled.Image`
  flex: 1;
  height: 100%;
`

export const OnGoingReservationText = styled.Text`
  font-size: 'archivo-600';
  color: ${colors.green};
  font-size: 15px;
`

export const FutureReservation = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const ReservationPeriodText = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ReservationDate = styled.Text`
  font-family: 'inter-400';
  font-size: 13px;
  color: ${colors.black};
`

export const LeftArrowIcon = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-right',
  size: 20,
  color: colors.grayAccent
})`
  margin: 0 2px;
`

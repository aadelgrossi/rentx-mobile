import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

import colors from '../../../../styles/colors'

export const DateInfoContainer = styled.View<{ isOnGoingReservation: boolean }>`
  height: 40px;
  background-color: ${props =>
    props.isOnGoingReservation ? colors.hoverGreen : colors.grayLightest};
  margin-top: 3px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 20px;
  margin-bottom: 16px;
`

export const Label = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'archivo-500';
  color: ${colors.grayAccent};
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
  color: ${colors.grayPrimary};
`

export const RightArrow = styled(MaterialIcons).attrs({
  name: 'keyboard-arrow-right',
  size: 16,
  color: colors.grayAccent
})`
  margin: 0 4px;
`

import React, { useMemo } from 'react'

import { isAfter, parseISO } from 'date-fns'

import { formatShortDate } from '../../../../utils/formatDate'
import {
  DateInfoContainer,
  OnGoingReservationText,
  FutureReservation,
  Label,
  ReservationPeriodText,
  ReservationDate,
  RightArrow
} from './styles'

const ReservationDates: React.FC<Pick<Rental, 'startDate' | 'endDate'>> = ({
  startDate,
  endDate
}) => {
  const isOnGoingReservation = useMemo(() => {
    return isAfter(new Date(), parseISO(startDate))
  }, [startDate])

  return (
    <DateInfoContainer isOnGoingReservation={isOnGoingReservation}>
      {isOnGoingReservation ? (
        <OnGoingReservationText>
          Utilizando até {formatShortDate(endDate)}
        </OnGoingReservationText>
      ) : (
        <FutureReservation>
          <Label>Período</Label>
          <ReservationPeriodText>
            <ReservationDate>{formatShortDate(startDate)}</ReservationDate>
            <RightArrow />
            <ReservationDate>{formatShortDate(endDate)}</ReservationDate>
          </ReservationPeriodText>
        </FutureReservation>
      )}
    </DateInfoContainer>
  )
}

export default ReservationDates

import React, { useMemo } from 'react'

import { differenceInDays, isAfter, parseISO, startOfDay } from 'date-fns'

import { RentIcon } from '~/components'
import colors from '~/styles/colors'
import { formatShortDate } from '~/utils/formatDate'

import {
  Info,
  ModelInfo,
  Label,
  CarModel,
  AddInfo,
  AddInfoContent,
  CarPhoto
} from '../styles'
import {
  DetailsContainer,
  TotalValue,
  DateInfoContainer,
  OnGoingReservationText,
  FutureReservation,
  ReservationDate,
  ReservationPeriodText,
  RightArrow
} from './styles'

export const RentalCard: React.FC<Rental> = ({
  car: { manufacturer, dailyRate, fuelType, model, photo },
  startDate,
  endDate
}) => {
  const amountOfDays = useMemo(() => {
    const parsedStartDate = parseISO(startDate)
    const parsedEndDate = parseISO(endDate)

    return differenceInDays(parsedEndDate, parsedStartDate) + 1
  }, [startDate, endDate])

  const totalValue = useMemo(() => {
    return dailyRate * amountOfDays
  }, [amountOfDays, dailyRate])

  const isOnGoingReservation = useMemo(() => {
    const parsedEndDAte = parseISO(endDate)
    const parsedStartDate = parseISO(startDate)
    const today = startOfDay(new Date())

    return isAfter(parsedEndDAte, today) && !isAfter(parsedStartDate, today)
  }, [startDate, endDate])

  return (
    <>
      <DetailsContainer>
        <Info>
          <ModelInfo>
            <Label>{manufacturer.name}</Label>
            <CarModel>{model}</CarModel>
          </ModelInfo>
          <AddInfo>
            <Label>Por {amountOfDays} dias</Label>
            <AddInfoContent>
              <TotalValue>R$ {totalValue}</TotalValue>
              <RentIcon color={colors.grayText} size={22} name={fuelType} />
            </AddInfoContent>
          </AddInfo>
        </Info>

        <CarPhoto
          style={{ resizeMode: 'contain', marginRight: 10 }}
          source={{ uri: photo.url }}
        />
      </DetailsContainer>

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
    </>
  )
}

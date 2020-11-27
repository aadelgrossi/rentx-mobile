import React, { useMemo } from 'react'

import { differenceInDays, isAfter, parseISO } from 'date-fns'

import colors from '../../../styles/colors'
import { formatShortDate } from '../../../utils/formatDate'
import RentIcon from '../../RentIcon'
import {
  DetailsContainer,
  DateInfoContainer,
  Info,
  Label,
  CarModel,
  ModelInfo,
  AddInfo,
  AddInfoContent,
  TotalValue,
  CarPhoto,
  OnGoingReservationText,
  FutureReservation,
  ReservationDate,
  ReservationPeriodText,
  LeftArrowIcon
} from './styles'

const RentalCard: React.FC<Rental> = ({ car, startDate, endDate }) => {
  const amountOfDays = useMemo(() => {
    const parsedStartDate = Date.parse(startDate)
    const parsedEndDate = Date.parse(endDate)

    return differenceInDays(parsedEndDate, parsedStartDate)
  }, [startDate, endDate])

  const totalValue = useMemo(() => {
    return car.dailyValue * amountOfDays
  }, [amountOfDays, car.dailyValue])

  const isOnGoingReservation = useMemo(() => {
    return isAfter(new Date(), parseISO(startDate))
  }, [startDate])

  return (
    <>
      <DetailsContainer>
        <Info>
          <ModelInfo>
            <Label>{car.manufacturer.name}</Label>
            <CarModel>{car.name}</CarModel>
          </ModelInfo>
          <AddInfo>
            <Label>Por {amountOfDays} dias</Label>
            <AddInfoContent>
              <TotalValue>R$ {totalValue}</TotalValue>
              <RentIcon
                color={colors.grayText}
                size={20}
                name={car.fuelType}
              ></RentIcon>
            </AddInfoContent>
          </AddInfo>
        </Info>

        <CarPhoto
          style={{ resizeMode: 'contain' }}
          source={{ uri: car.photo.url }}
        ></CarPhoto>
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
              <LeftArrowIcon />
              <ReservationDate>{formatShortDate(endDate)}</ReservationDate>
            </ReservationPeriodText>
          </FutureReservation>
        )}
      </DateInfoContainer>
    </>
  )
}

export default RentalCard

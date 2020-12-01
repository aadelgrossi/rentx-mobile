import React, { useMemo } from 'react'

import { differenceInDays } from 'date-fns'

import colors from '../../../../styles/colors'
import RentIcon from '../../../RentIcon'
import {
  DetailsContainer,
  Info,
  ModelInfo,
  AddInfo,
  AddInfoContent,
  Label,
  CarModel,
  TotalValue,
  CarPhoto
} from './styles'

const UpperCardContent: React.FC<
  Pick<Rental, 'car' | 'startDate' | 'endDate'>
> = ({ car, endDate, startDate }) => {
  const { manufacturer, fuelType, dailyValue, photo, name } = car

  const amountOfDays = useMemo(() => {
    const parsedStartDate = Date.parse(startDate)
    const parsedEndDate = Date.parse(endDate)

    return differenceInDays(parsedEndDate, parsedStartDate)
  }, [startDate, endDate])

  const totalValue = useMemo(() => {
    return dailyValue * amountOfDays
  }, [amountOfDays, dailyValue])

  return (
    <DetailsContainer>
      <Info>
        <ModelInfo>
          <Label>{manufacturer.name}</Label>
          <CarModel>{name}</CarModel>
        </ModelInfo>
        <AddInfo>
          <Label>Por {amountOfDays} dias</Label>
          <AddInfoContent>
            <TotalValue>R$ {totalValue}</TotalValue>
            <RentIcon
              color={colors.grayText}
              size={20}
              name={fuelType}
            ></RentIcon>
          </AddInfoContent>
        </AddInfo>
      </Info>

      <CarPhoto
        style={{ resizeMode: 'contain' }}
        source={{ uri: photo.url }}
      ></CarPhoto>
    </DetailsContainer>
  )
}

export default UpperCardContent

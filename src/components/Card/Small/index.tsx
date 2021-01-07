import React from 'react'

import colors from '../../../styles/colors'
import RentIcon from '../../RentIcon'
import {
  Container,
  Info,
  ModelInfo,
  Label,
  CarModel,
  AddInfo,
  AddInfoContent,
  RateValue,
  CarPhoto
} from '../styles'

const CarCard: React.FC<Car> = ({
  manufacturer,
  fuelType,
  model,
  dailyRate,
  photo
}) => {
  return (
    <Container>
      <Info>
        <ModelInfo>
          <Label>{manufacturer.name}</Label>
          <CarModel>{model}</CarModel>
        </ModelInfo>
        <AddInfo>
          <Label>Ao dia</Label>
          <AddInfoContent>
            <RateValue>R$ {dailyRate}</RateValue>
            <RentIcon color={colors.grayText} size={20} name={fuelType} />
          </AddInfoContent>
        </AddInfo>
      </Info>

      <CarPhoto style={{ resizeMode: 'contain' }} source={{ uri: photo.url }} />
    </Container>
  )
}

export default CarCard

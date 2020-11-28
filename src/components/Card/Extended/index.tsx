import React from 'react'

import colors from '../../../styles/colors'
import {
  Container,
  ModelInfo,
  CarModel,
  AddInfo,
  CarPhoto,
  Label,
  RateValue,
  FuelIcon
} from './styles'

const ExtendedCard: React.FC<Car> = ({
  manufacturer,
  name,
  dailyValue,
  fuelType,
  photo
}) => {
  return (
    <Container>
      <ModelInfo>
        <Label>{manufacturer.name}</Label>
        <CarModel>{name}</CarModel>
      </ModelInfo>
      <AddInfo>
        <Label>Ao dia</Label>
        <RateValue>R$ {dailyValue}</RateValue>
      </AddInfo>

      <FuelIcon color={colors.grayText} size={24} name={fuelType} />

      <CarPhoto
        style={{ resizeMode: 'contain' }}
        source={{ uri: photo.url }}
      ></CarPhoto>
    </Container>
  )
}

export default ExtendedCard

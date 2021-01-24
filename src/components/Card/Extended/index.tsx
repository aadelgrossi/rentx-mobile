import React from 'react'

import colors from '~/styles/colors'

import { Label, CarModel, RateValue } from '../styles'
import {
  LargeContainer,
  ModelInfo,
  AddInfo,
  CarPhoto,
  FuelIcon
} from './styles'

export const ExtendedCard: React.FC<Car> = ({
  manufacturer,
  model,
  dailyRate,
  fuelType,
  photo
}) => {
  return (
    <LargeContainer>
      <ModelInfo>
        <Label>{manufacturer.name}</Label>
        <CarModel>{model}</CarModel>
      </ModelInfo>
      <AddInfo>
        <Label>Ao dia</Label>
        <RateValue style={{ marginRight: 0 }}>R$ {dailyRate}</RateValue>
      </AddInfo>

      <FuelIcon color={colors.grayText} size={26} name={fuelType} />

      <CarPhoto style={{ resizeMode: 'contain' }} source={{ uri: photo.url }} />
    </LargeContainer>
  )
}

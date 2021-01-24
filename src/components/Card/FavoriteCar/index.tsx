import React from 'react'

import { RentIcon } from '~/components'
import colors from '~/styles/colors'

import {
  Container,
  Info,
  ModelInfo,
  Label,
  AddInfo,
  AddInfoContent,
  CarModel,
  RateValue
} from '../styles'
import { CarPhoto } from './styles'
export const FavoriteCarCard: React.FC<FavoriteCar> = ({
  dailyRate,
  model,
  fuelType,
  photo,
  manufacturer,
  totalDays
}) => {
  return (
    <Container>
      <Info>
        <ModelInfo>
          <Label>{manufacturer.name}</Label>
          <CarModel>{model}</CarModel>
        </ModelInfo>
        <AddInfo>
          <Label>Por {totalDays} dias</Label>
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

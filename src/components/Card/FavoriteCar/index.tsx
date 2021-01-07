import React from 'react'

import RentIcon from '~/components/RentIcon'
import colors from '~/styles/colors'

import {
  Container,
  Info,
  ModelInfo,
  Label,
  AddInfo,
  AddInfoContent
} from '../styles'
import { CarModel, TotalValue, CarPhoto } from './styles'

const FavoriteCarCard: React.FC<FavoriteCar> = ({
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
            <TotalValue>R$ {dailyRate}</TotalValue>
            <RentIcon color={colors.grayText} size={20} name={fuelType} />
          </AddInfoContent>
        </AddInfo>
      </Info>

      <CarPhoto style={{ resizeMode: 'contain' }} source={{ uri: photo.url }} />
    </Container>
  )
}

export default FavoriteCarCard

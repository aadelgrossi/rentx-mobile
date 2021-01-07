import React from 'react'

import colors from '../../../styles/colors'
import RentIcon from '../../RentIcon'
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

const FavoriteCarCard: React.FC<FavoriteCar> = ({
  dailyRate,
  model,
  fuelType,
  photo,
  manufacturer,
  totalDays
}) => {
  return (
    <DetailsContainer>
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
    </DetailsContainer>
  )
}

export default FavoriteCarCard

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
} from './styles'

const CarCard: React.FC<Car> = ({
  manufacturer,
  name,
  dailyValue,
  fuelType,
  photo
}) => {
  return (
    <Container>
      <Info>
        <ModelInfo>
          <Label>{manufacturer.name}</Label>
          <CarModel>{name}</CarModel>
        </ModelInfo>
        <AddInfo>
          <Label>Ao dia</Label>
          <AddInfoContent>
            <RateValue>R$ {dailyValue}</RateValue>
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
    </Container>
  )
}

export default CarCard

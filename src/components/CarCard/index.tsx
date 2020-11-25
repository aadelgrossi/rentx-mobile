import React from 'react'

import colors from '../../styles/colors'
import RentIcon from '../RentIcon'
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

interface CarProps {
  car: Car
}

const CarCard: React.FC<CarProps> = ({ car }) => {
  return (
    <Container>
      <Info>
        <ModelInfo>
          <Label>{car.manufacturer.name}</Label>
          <CarModel>{car.name}</CarModel>
        </ModelInfo>
        <AddInfo>
          <Label>Ao dia</Label>
          <AddInfoContent>
            <RateValue>R$ {car.dailyValue}</RateValue>
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
    </Container>
  )
}

export default CarCard

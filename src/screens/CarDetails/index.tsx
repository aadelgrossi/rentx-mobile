import React, { useMemo } from 'react'

import { NavigationProp, RouteProp } from '@react-navigation/native'
import { differenceInDays, parseISO } from 'date-fns'
import { StatusBar } from 'expo-status-bar'

import { ReservationParamList } from '../../../types'
import Button from '../../components/Button'
import RentIcon from '../../components/RentIcon'
import colors from '../../styles/colors'
import { formatShortDate } from '../../utils/formatDate'
import { FUEL_LABELS, TRANSMISSION_LABELS } from '../../utils/spec_labels'
import {
  Container,
  Section,
  BackButton,
  CarPhoto,
  CarRate,
  CarTitle,
  Label,
  Item,
  SubtotalContainer,
  BackIcon,
  SpecificationsContainer,
  SpecItemContainer,
  SpecItemText,
  DateItem,
  SubTotal,
  TotalPrice,
  DatesSection,
  SubTotalSection
} from './styles'

interface CarDetailsProps {
  route: RouteProp<ReservationParamList, 'CarDetails'>
  navigation: NavigationProp<ReservationParamList, 'CarDetails'>
}

const CarDetails: React.FC<CarDetailsProps> = ({ route, navigation }) => {
  const { car, startDate, endDate } = route.params

  const allSpecifications: CarSpec[] = [
    {
      id: 'fuel',
      name: car.fuelType,
      value: FUEL_LABELS[car.fuelType]
    },
    {
      id: 'transmission',
      name: 'transmission',
      value: TRANSMISSION_LABELS[car.transmission]
    },
    ...car.specifications
  ]

  const reservationDaysAmount = useMemo(() => {
    return differenceInDays(parseISO(endDate), parseISO(startDate)) + 1
  }, [startDate, endDate])

  const totalPrice = useMemo(() => {
    return car.dailyValue * reservationDaysAmount
  }, [car.dailyValue, reservationDaysAmount])

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <BackIcon />
      </BackButton>
      <CarPhoto
        style={{ resizeMode: 'contain' }}
        source={{ uri: car.photo.url }}
      />

      <SpecificationsContainer
        scrollEnabled
        ListHeaderComponent={
          <Section>
            <Item>
              <Label>{car.manufacturer.name}</Label>
              <CarTitle>{car.name}</CarTitle>
            </Item>
            <Item>
              <Label>Ao dia</Label>
              <CarRate>R$ {car.dailyValue}</CarRate>
            </Item>
          </Section>
        }
        data={allSpecifications}
        keyExtractor={({ id }: CarSpec) => id}
        renderItem={({ item }: { item: CarSpec }) => (
          <SpecItemContainer>
            <RentIcon name={item.name} size={32} color={colors.grayPrimary} />
            <SpecItemText>{item.value}</SpecItemText>
          </SpecItemContainer>
        )}
        ListFooterComponent={
          <DatesSection>
            <Item>
              <Label>De</Label>
              <DateItem>{formatShortDate(startDate)}</DateItem>
            </Item>

            <RentIcon
              name="arrow-right"
              color={colors.grayAccent}
              size={15}
            ></RentIcon>
            <Item>
              <Label>Até</Label>
              <DateItem>{formatShortDate(endDate)}</DateItem>
            </Item>
          </DatesSection>
        }
      />

      <SubtotalContainer>
        <SubTotalSection>
          <Item>
            <Label>Total</Label>
            <SubTotal>
              R$ {car.dailyValue} x{reservationDaysAmount} diárias
            </SubTotal>
          </Item>
          <Item>
            <TotalPrice>R$ {totalPrice}</TotalPrice>
          </Item>
        </SubTotalSection>
        <Button onPress={() => navigation.navigate('ConfirmReservation')}>
          Alugar agora
        </Button>
      </SubtotalContainer>
      <StatusBar style="dark" />
    </Container>
  )
}

export default CarDetails

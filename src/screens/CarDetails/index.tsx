import React, { useMemo } from 'react'

import { useQuery } from '@apollo/client'
import { NavigationProp, RouteProp } from '@react-navigation/native'
import { differenceInDays, parseISO } from 'date-fns'
import { StatusBar } from 'expo-status-bar'

import CAR_WITH_SPECS from '~/graphql/specs'

import Button from '../../components/Button'
import RentIcon from '../../components/RentIcon'
import { ReservationParamList } from '../../navigation/types'
import colors from '../../styles/colors'
import { formatShortDate } from '../../utils/formatDate'
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
  const {
    car: { id, manufacturer, model, dailyRate, photo },
    startDate,
    endDate
  } = route.params
  const { data } = useQuery<{ car: Car }>(CAR_WITH_SPECS, {
    variables: { id }
  })

  const reservationDaysAmount = useMemo(() => {
    return differenceInDays(parseISO(endDate), parseISO(startDate)) + 1
  }, [startDate, endDate])

  const totalPrice = useMemo(() => {
    return dailyRate * reservationDaysAmount
  }, [dailyRate, reservationDaysAmount])

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <BackIcon />
      </BackButton>
      <CarPhoto style={{ resizeMode: 'cover' }} source={{ uri: photo.url }} />

      <SpecificationsContainer
        scrollEnabled
        ListHeaderComponent={
          <Section>
            <Item>
              <Label>{manufacturer.name}</Label>
              <CarTitle>{model}</CarTitle>
            </Item>
            <Item>
              <Label>Ao dia</Label>
              <CarRate>R$ {dailyRate}</CarRate>
            </Item>
          </Section>
        }
        data={data?.car.specifications}
        keyExtractor={({ id }: CarSpec) => id}
        renderItem={({ item: { specification, value } }: { item: CarSpec }) => (
          <SpecItemContainer>
            <RentIcon
              name={
                specification.isIconValue
                  ? (value as CustomCarSpec)
                  : specification.icon
              }
              size={32}
              color={colors.grayPrimary}
            />
            <SpecItemText>{value}</SpecItemText>
          </SpecItemContainer>
        )}
        ListFooterComponent={
          <DatesSection>
            <Item>
              <Label>De</Label>
              <DateItem>{formatShortDate(startDate)}</DateItem>
            </Item>
            <RentIcon name="arrow-right" color={colors.grayAccent} size={15} />
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
              R$ {dailyRate} x{reservationDaysAmount} diárias
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

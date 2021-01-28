import React, { useCallback, useMemo } from 'react'

import { useMutation, useQuery } from '@apollo/client'
import { StackScreenProps } from '@react-navigation/stack'
import { differenceInDays, parseISO } from 'date-fns'
import { StatusBar } from 'expo-status-bar'

import { Button } from '~/components'
import { BASE_SPECS, FUEL_TYPE, FUEL_LABELS } from '~/constants'
import { CREATE_RENTAL, GET_RENTALS, CAR_SPECIFICATIONS } from '~/graphql'
import { ReservationParamList } from '~/navigation/types'
import { formatShortDate } from '~/utils/formatDate'

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
  Arrow,
  TotalPrice,
  SpecIcon,
  DatesSection,
  SubTotalSection
} from './styles'

export const CarDetails: React.FC<
  StackScreenProps<ReservationParamList, 'CarDetails'>
> = ({ route, navigation }) => {
  const {
    car: { id, manufacturer, model, dailyRate, photo },
    startDate,
    endDate
  } = route.params
  const { data } = useQuery<{ specifications: CarSpec[] }>(CAR_SPECIFICATIONS, {
    variables: { id }
  })

  const [createRental] = useMutation(CREATE_RENTAL, {
    variables: { data: { startDate, endDate, carId: id } },
    refetchQueries: [{ query: GET_RENTALS }]
  })

  const reservationDaysAmount = useMemo(() => {
    return differenceInDays(parseISO(endDate), parseISO(startDate)) + 1
  }, [startDate, endDate])

  const totalPrice = useMemo(() => {
    return dailyRate * reservationDaysAmount
  }, [dailyRate, reservationDaysAmount])

  const handleSubmit = useCallback(async () => {
    try {
      await createRental()
      navigation.navigate('ConfirmReservation')
    } catch (err) {
      console.error(err)
    }
  }, [createRental, navigation])

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <BackIcon />
      </BackButton>
      <CarPhoto style={{ resizeMode: 'contain' }} source={{ uri: photo.url }} />

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
        data={data?.specifications}
        keyExtractor={({ id }: CarSpec) => id}
        renderItem={({
          item: {
            specification: { icon, isIconValue, name },
            value
          }
        }: {
          item: CarSpec
        }) => (
          <SpecItemContainer>
            <SpecIcon name={isIconValue ? (value as CustomCarSpec) : icon} />
            <SpecItemText>
              {name === BASE_SPECS.fuelType
                ? FUEL_LABELS[value as FUEL_TYPE]
                : value}
            </SpecItemText>
          </SpecItemContainer>
        )}
        ListFooterComponent={
          <DatesSection>
            <Item>
              <Label>De</Label>
              <DateItem>{formatShortDate(startDate)}</DateItem>
            </Item>
            <Arrow />
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
        <Button onPress={handleSubmit}>Alugar agora</Button>
      </SubtotalContainer>
      <StatusBar style="dark" />
    </Container>
  )
}

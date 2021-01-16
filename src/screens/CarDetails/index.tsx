import React, { useCallback, useMemo } from 'react'

import { useMutation, useQuery } from '@apollo/client'
import { StackScreenProps } from '@react-navigation/stack'
import { differenceInDays, parseISO } from 'date-fns'
import { StatusBar } from 'expo-status-bar'

import { CREATE_RENTAL, GET_RENTALS } from '~/graphql/rentals'
import CAR_SPECIFICATIONS from '~/graphql/specs'

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

const CarDetails: React.FC<
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
  }, [])

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
        <Button onPress={handleSubmit}>Alugar agora</Button>
      </SubtotalContainer>
      <StatusBar style="dark" />
    </Container>
  )
}

export default CarDetails

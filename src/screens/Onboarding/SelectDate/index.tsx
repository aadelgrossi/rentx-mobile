import React, { useCallback, useState } from 'react'

import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { usePersistStorage } from 'react-native-use-persist-storage'

import { Calendar, RentIcon } from '~/components'
import { ONBOARDING_SELECT_DATE_KEY } from '~/constants/async_storage_keys'
import { AppRoutesParamList, TabRoutesParamList } from '~/navigation/types'
import colors from '~/styles/colors'
import { formatShortDate } from '~/utils/formatDate'

import {
  Container,
  DarkSection,
  Title,
  DateContainer,
  DateWrapper,
  DateValue,
  Label,
  LightSection,
  Button,
  ButtonText
} from './styles'

interface SelectDateNavigationProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AppRoutesParamList, 'SelectDate'>,
    StackNavigationProp<TabRoutesParamList>
  >
}

export const SelectDate: React.FC<SelectDateNavigationProps> = ({
  navigation
}) => {
  const [_, setHasSelectedDate] = usePersistStorage<boolean>(
    ONBOARDING_SELECT_DATE_KEY,
    false
  )

  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const handleDateChange = useCallback((date: any, type: string) => {
    if (type === 'END_DATE') {
      setEndDate(date)
    } else {
      setStartDate(date)
      setEndDate(null)
    }
  }, [])

  const handleSubmit = useCallback(() => {
    if (startDate && endDate) {
      setHasSelectedDate(true)
      navigation.navigate('Tabs', {
        screen: 'Home',
        params: {
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString()
        }
      })
    }
  }, [startDate, endDate, navigation, setHasSelectedDate])

  return (
    <>
      <Container>
        <DarkSection>
          <Title>Escolha a data e encontre um carro.</Title>
          <DateContainer>
            <DateWrapper filled={!!startDate}>
              <Label>De</Label>
              <DateValue>
                {startDate && formatShortDate(startDate.toISOString())}
              </DateValue>
            </DateWrapper>
            <RentIcon name="arrow-right" color={colors.grayText} size={20} />
            <DateWrapper filled={!!endDate}>
              <Label>Até</Label>
              <DateValue>
                {endDate && formatShortDate(endDate.toISOString())}
              </DateValue>
            </DateWrapper>
          </DateContainer>
        </DarkSection>
        <LightSection>
          <Calendar onChange={handleDateChange} />
          <Button disabled={!endDate} onPress={handleSubmit}>
            <ButtonText>Confirmar</ButtonText>
          </Button>
        </LightSection>
      </Container>
      <StatusBar style="light" />
    </>
  )
}

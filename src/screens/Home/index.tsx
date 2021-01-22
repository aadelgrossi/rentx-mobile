import React, { useCallback, useMemo, useState } from 'react'

import { useQuery } from '@apollo/client'
import { MaterialIcons } from '@expo/vector-icons'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { addDays, lastDayOfWeek } from 'date-fns'
import { StatusBar } from 'expo-status-bar'
import { Dimensions } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'

import { Calendar, CustomMarker, RentIcon } from '~/components'
import { ExtendedCard } from '~/components/Card'
import { FALLBACK_DAILY_RATE_RANGE, FUEL_TYPE, TRANSMISSION } from '~/constants'
import { CARS, DAILY_RATE_RANGE } from '~/graphql/cars'
import { AppRoutesParamList, TabRoutesParamList } from '~/navigation/types'
import colors from '~/styles/colors'
import { formatShortDate } from '~/utils/formatDate'
import { FUEL_LABELS, TRANSMISSION_LABELS } from '~/utils/spec_labels'

import {
  Container,
  Header,
  DateRangeHeader,
  DateContainer,
  DateContent,
  Label,
  CalendarContainer,
  Title,
  ResultsCount,
  SearchResults,
  FilterContainer,
  ModalTopDetail,
  FilterHeader,
  Separator,
  FilterItem,
  FilterItemTitle,
  FilterClearButton,
  FilterClearText,
  PriceIndicator,
  PriceRange,
  TransmissionTypeSelect,
  FuelTypeSelect,
  FuelOptionText,
  OptionButton,
  OptionText,
  SubmitFilters,
  SubmitFiltersText
} from './styles'

interface DailyRateRangeQueryResponse {
  dailyRateRange: {
    min: number
    max: number
  }
}

export const Home: React.FC<{
  navigation: CompositeNavigationProp<
    StackNavigationProp<TabRoutesParamList, 'Home'>,
    StackNavigationProp<AppRoutesParamList>
  >
}> = ({ navigation }) => {
  const { data: rateData } = useQuery<DailyRateRangeQueryResponse>(
    DAILY_RATE_RANGE
  )
  const dailyRateRange = useMemo(() => {
    if (rateData) {
      const { min, max } = rateData.dailyRateRange
      return [min, max]
    }

    return FALLBACK_DAILY_RATE_RANGE
  }, [rateData])

  const [priceRange, setPriceRange] = useState(dailyRateRange)

  const [startDate, setStartDate] = useState<Date>(
    lastDayOfWeek(new Date(), { weekStartsOn: 6 })
  )
  const [endDate, setEndDate] = useState<Date | null>(addDays(startDate, 3))

  const [fuelType, setFuelType] = useState<FUEL_TYPE | null>(null)
  const [transmission, setTransmission] = useState<TRANSMISSION | null>(null)

  const { data } = useQuery<{ cars: Car[] }>(CARS, {
    variables: {
      filter: {
        minDailyRate: priceRange[0],
        maxDailyRate: priceRange[1],
        fromDate: startDate,
        toDate: endDate,
        fuelType,
        transmission
      }
    }
  })

  const [modalVisible, setModalVisible] = useState(false)
  const [calendarVisible, setCalendarVisible] = useState(false)

  const toggleFilterModal = useCallback(() => {
    setModalVisible(state => !state)
  }, [])

  const toggleCalendarVisible = useCallback(() => {
    setCalendarVisible(state => !state)
  }, [])

  const handleClearFilters = useCallback(() => {
    setPriceRange(dailyRateRange)
    setFuelType(null)
    setTransmission(null)
  }, [dailyRateRange])

  const handleDateChange = useCallback((date: any, type: string) => {
    if (type === 'END_DATE') {
      setEndDate(date)
    } else {
      setStartDate(date)
      setEndDate(null)
    }
  }, [])

  const goToCarDetails = useCallback(
    (car: Car) => {
      if (startDate && endDate) {
        navigation.navigate('CreateReservationNavigator', {
          screen: 'CarDetails',
          params: {
            car,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString()
          }
        })
      }
    },
    [startDate, endDate, navigation]
  )

  return (
    <Container>
      <DateRangeHeader>
        <DateContainer>
          <TouchableOpacity onPress={toggleCalendarVisible}>
            <Label>De</Label>
            <DateContent>
              {formatShortDate(startDate.toISOString())}
            </DateContent>
          </TouchableOpacity>
        </DateContainer>

        <MaterialIcons
          name="keyboard-arrow-right"
          size={22}
          color={colors.grayText}
        />
        <DateContainer>
          <TouchableOpacity onPress={toggleCalendarVisible}>
            <Label>Até</Label>
            <DateContent>
              {endDate ? formatShortDate(endDate.toISOString()) : ''}
            </DateContent>
          </TouchableOpacity>
        </DateContainer>
      </DateRangeHeader>

      <Header>
        <Title>Resultados</Title>
        <ResultsCount>{data?.cars.length || 'Nenhum'} carro(s)</ResultsCount>
        <RectButton onPress={toggleFilterModal}>
          <RentIcon name="filter" color={colors.black} />
        </RectButton>
      </Header>

      {data && (
        <SearchResults
          data={data.cars}
          keyExtractor={({ id }: Car) => id}
          renderItem={({ item }: { item: Car }) => (
            <TouchableOpacity onPress={() => goToCarDetails(item)}>
              <ExtendedCard {...item} />
            </TouchableOpacity>
          )}
        />
      )}

      <Modal
        isVisible={calendarVisible}
        onBackButtonPress={toggleCalendarVisible}
        onBackdropPress={endDate ? toggleCalendarVisible : undefined}
        onSwipeComplete={toggleCalendarVisible}
        swipeDirection="down"
        style={{ margin: 0 }}
        deviceWidth={Dimensions.get('screen').width}
      >
        <CalendarContainer
          style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}
        >
          <ModalTopDetail />
          <Calendar onChange={handleDateChange} />
          <SubmitFilters disabled={!endDate} onPress={toggleCalendarVisible}>
            <SubmitFiltersText>Confirmar</SubmitFiltersText>
          </SubmitFilters>
        </CalendarContainer>
      </Modal>

      <Modal
        isVisible={modalVisible}
        onBackButtonPress={toggleFilterModal}
        onBackdropPress={toggleFilterModal}
        onSwipeComplete={toggleFilterModal}
        swipeDirection="down"
        style={{ margin: 0 }}
        deviceWidth={Dimensions.get('screen').width}
      >
        <FilterContainer
          style={{ borderTopRightRadius: 24, borderTopLeftRadius: 24 }}
        >
          <ModalTopDetail />

          <FilterHeader>
            <Title>Filtro</Title>
            <FilterClearButton onPress={handleClearFilters}>
              <FilterClearText>Limpar todos</FilterClearText>
            </FilterClearButton>
          </FilterHeader>

          <Separator />

          <FilterItem>
            <PriceIndicator>
              <FilterItemTitle>Preço ao dia</FilterItemTitle>
              <PriceRange>
                R$ {priceRange[0]} - R$ {priceRange[1]}
              </PriceRange>
            </PriceIndicator>
            <MultiSlider
              values={priceRange}
              min={dailyRateRange[0]}
              max={dailyRateRange[1]}
              containerStyle={{ marginTop: 8, alignSelf: 'center' }}
              customMarker={CustomMarker}
              trackStyle={{ backgroundColor: colors.grayLight }}
              selectedStyle={{ backgroundColor: colors.red }}
              sliderLength={Dimensions.get('window').width - 72}
              onValuesChange={values => setPriceRange(values)}
              minMarkerOverlapDistance={20}
              step={1}
            />
          </FilterItem>

          <FilterItem>
            <FilterItemTitle>Combustível</FilterItemTitle>
            <FuelTypeSelect>
              {Object.values(FUEL_TYPE).map(fuel => (
                <OptionButton
                  onPress={() => setFuelType(fuel)}
                  active={fuel === fuelType}
                  key={fuel}
                >
                  {fuel && (
                    <RentIcon
                      name={fuel}
                      color={fuel === fuelType ? colors.red : colors.grayAccent}
                      size={24}
                    />
                  )}
                  <FuelOptionText>{FUEL_LABELS[fuel]}</FuelOptionText>
                </OptionButton>
              ))}
            </FuelTypeSelect>
          </FilterItem>

          <FilterItem>
            <FilterItemTitle>Transmissão</FilterItemTitle>
            <TransmissionTypeSelect>
              {Object.values(TRANSMISSION).map(item => (
                <OptionButton
                  onPress={() => setTransmission(item)}
                  active={transmission === item}
                  key={item}
                >
                  <OptionText>{TRANSMISSION_LABELS[item]}</OptionText>
                </OptionButton>
              ))}
            </TransmissionTypeSelect>
          </FilterItem>

          <SubmitFilters onPress={toggleFilterModal}>
            <SubmitFiltersText>Confirmar</SubmitFiltersText>
          </SubmitFilters>
        </FilterContainer>
      </Modal>

      <StatusBar style="light" />
    </Container>
  )
}

import React, { useCallback, useEffect, useState } from 'react'

import { useQuery } from '@apollo/client'
import { MaterialIcons } from '@expo/vector-icons'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { StackNavigationProp } from '@react-navigation/stack'
import { addDays, lastDayOfWeek } from 'date-fns'
import { StatusBar } from 'expo-status-bar'
import { Dimensions } from 'react-native'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'

import { ReservationParamList } from '../../../types'
import Calendar from '../../components/Calendar'
import Card from '../../components/Card/Extended'
import CustomMarker from '../../components/CustomMarker'
import RentIcon from '../../components/RentIcon'
import { FUEL_TYPE, TRANSMISSION } from '../../constants'
import GET_ALL_CARS from '../../graphql/cars'
import colors from '../../styles/colors'
import { formatShortDate } from '../../utils/formatDate'
import { FUEL_LABELS, TRANSMISSION_LABELS } from '../../utils/spec_labels'
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

const BASE_PRICE_RANGE = [50, 1500]

const Home: React.FC<{
  navigation: StackNavigationProp<ReservationParamList, 'Listing'>
}> = ({ navigation }) => {
  const [priceRange, setPriceRange] = useState(BASE_PRICE_RANGE)
  const [startDate, setStartDate] = useState<Date>(
    lastDayOfWeek(new Date(), { weekStartsOn: 0 })
  )
  const [endDate, setEndDate] = useState<Date | null>(addDays(startDate, 4))

  const [fuelType, setFuelType] = useState<FUEL_TYPE | null>(null)
  const [transmission, setTransmission] = useState<TRANSMISSION | null>(null)

  const { data } = useQuery<{ cars: Car[] }>(GET_ALL_CARS, {
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
    setPriceRange(BASE_PRICE_RANGE)
    setFuelType(null)
    setTransmission(null)
  }, [])

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
        navigation.navigate('CarDetails', {
          car,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString()
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
              <Card {...item} />
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
              min={BASE_PRICE_RANGE[0]}
              max={BASE_PRICE_RANGE[1]}
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

export default Home

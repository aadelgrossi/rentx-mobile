import React, { useCallback, useState } from 'react'

import { useQuery } from '@apollo/client'
import { MaterialIcons } from '@expo/vector-icons'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { addDays, lastDayOfWeek } from 'date-fns'
import { StatusBar } from 'expo-status-bar'
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'

import Card from '../../components/Card/Extended'
import CustomMarker from '../../components/CustomMarker'
import RentIcon from '../../components/RentIcon'
import GET_ALL_CARS from '../../graphql/cars'
import colors from '../../styles/colors'
import { fuelTypes, transmissionTypes } from '../../utils/filterOptions'
import { formatShortDate } from '../../utils/formatDate'
import {
  Container,
  Header,
  DateRangeHeader,
  DateContainer,
  Label,
  DateContent,
  Title,
  ResultsCount,
  SearchResults,
  FilterContainer,
  FilterHeader,
  FilterClear,
  PriceIndicator,
  PriceRange,
  FilterItem,
  FilterItemTitle,
  Separator,
  SubmitFilters,
  SubmitFiltersText,
  TransmissionTypeSelect,
  OptionButton,
  OptionText,
  FuelTypeSelect,
  FilterClearButton
} from './styles'

const BASE_PRICE_RANGE = [50, 1500]

const Home: React.FC = () => {
  const { data } = useQuery<{ cars: Car[] }>(GET_ALL_CARS)

  const [startDate, setStartDate] = useState<Date>(
    lastDayOfWeek(new Date(), { weekStartsOn: 6 })
  )
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 4))

  const [priceRange, setPriceRange] = useState(BASE_PRICE_RANGE)
  const [fuelType, setFuelType] = useState<FuelType | ''>('')
  const [transmissionType, setTransmissionType] = useState<
    TransmissionType | ''
  >('')
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = useCallback(() => {
    setModalVisible(state => !state)
  }, [])

  const handleClearFilters = useCallback(() => {
    setPriceRange(BASE_PRICE_RANGE)
    setFuelType('')
    setTransmissionType('')
  }, [])

  return (
    <Container>
      <DateRangeHeader>
        <DateContainer>
          <Label>De</Label>
          <DateContent>{formatShortDate(startDate.toISOString())}</DateContent>
        </DateContainer>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={20}
          style={{ marginTop: 16 }}
          color={colors.grayText}
        />
        <DateContainer>
          <Label>Até</Label>
          <DateContent>{formatShortDate(endDate.toISOString())}</DateContent>
        </DateContainer>
      </DateRangeHeader>

      <Header>
        <Title>Resultados</Title>
        <ResultsCount>{data?.cars.length} carro(s)</ResultsCount>
        <RectButton onPress={toggleModal}>
          <RentIcon name="filter" color={colors.black} />
        </RectButton>
      </Header>

      {data && (
        <SearchResults
          data={data.cars}
          keyExtractor={({ id }: Car) => id}
          renderItem={({ item }: { item: Car }) => <Card {...item} />}
        ></SearchResults>
      )}

      <Modal
        onBackButtonPress={toggleModal}
        swipeDirection="down"
        style={{ margin: 0 }}
        deviceWidth={Dimensions.get('screen').width}
        onSwipeComplete={toggleModal}
        isVisible={modalVisible}
      >
        <FilterContainer
          style={{ borderTopRightRadius: 30, borderTopLeftRadius: 30 }}
        >
          <FilterHeader>
            <Title>Filtro</Title>
            <FilterClearButton onPress={handleClearFilters}>
              <FilterClear>Limpar todos</FilterClear>
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
              containerStyle={{ marginTop: 8 }}
              customMarker={CustomMarker}
              trackStyle={{ backgroundColor: colors.grayLight }}
              selectedStyle={{ backgroundColor: colors.red }}
              sliderLength={Dimensions.get('window').width - 48}
              onValuesChange={values => setPriceRange(values)}
              minMarkerOverlapDistance={20}
              step={1}
            ></MultiSlider>
          </FilterItem>

          <FilterItem>
            <FilterItemTitle>Combustível</FilterItemTitle>
            <FuelTypeSelect>
              {fuelTypes.map(item => (
                <OptionButton
                  onPress={() => setFuelType(item.value)}
                  active={item.value === fuelType}
                  key={item.value}
                >
                  {item.value && (
                    <RentIcon
                      name={item.value}
                      color={
                        item.value === fuelType ? colors.red : colors.grayAccent
                      }
                      size={24}
                    ></RentIcon>
                  )}
                  <OptionText style={{ marginTop: 4 }}>{item.label}</OptionText>
                </OptionButton>
              ))}
            </FuelTypeSelect>
          </FilterItem>

          <FilterItem>
            <FilterItemTitle>Transmissão</FilterItemTitle>
            <TransmissionTypeSelect>
              {transmissionTypes.map(item => (
                <OptionButton
                  onPress={() => setTransmissionType(item.value)}
                  active={item.value === transmissionType}
                  key={item.value}
                >
                  <OptionText>{item.label}</OptionText>
                </OptionButton>
              ))}
            </TransmissionTypeSelect>
          </FilterItem>

          <SubmitFilters onPress={toggleModal}>
            <SubmitFiltersText>Confirmar</SubmitFiltersText>
          </SubmitFilters>
        </FilterContainer>
      </Modal>

      <StatusBar style="light" />
    </Container>
  )
}

export default Home

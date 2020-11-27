import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import CalendarPicker from 'react-native-calendar-picker'

import colors from '../../styles/colors'

const Calendar: React.FC<{ onChange(date: any, type: string): void }> = ({
  onChange
}) => {
  return (
    <CalendarPicker
      allowRangeSelection={true}
      minDate={new Date()}
      dayShape="square"
      weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
      months={[
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ]}
      previousComponent={<MaterialIcons name="keyboard-arrow-left" size={20} />}
      nextComponent={<MaterialIcons name="keyboard-arrow-right" size={20} />}
      textStyle={{
        fontFamily: 'archivo-600',
        fontSize: 20,
        color: colors.black
      }}
      customDayHeaderStyles={() => ({
        textStyle: {
          textTransform: 'uppercase',
          fontSize: 10,
          color: colors.grayAccent
        }
      })}
      selectedDayColor={colors.red}
      selectedDayTextColor={colors.white}
      todayBackgroundColor={colors.hoverGreen}
      todayTextStyle={{ color: colors.grayPrimary }}
      selectedRangeStartStyle={{
        flex: 1,
        backgroundColor: colors.red,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      }}
      selectedRangeStyle={{
        flex: 1,
        backgroundColor: colors.hoverRed
      }}
      disabledDatesTextStyle={{
        fontFamily: 'inter-500',
        color: colors.grayAccent
      }}
      selectedRangeEndStyle={{
        flex: 1,
        backgroundColor: colors.red,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }}
      customDatesStyles={date => ({
        textStyle: {
          fontFamily: 'inter-500',
          fontSize: 15,
          color:
            date.weekday() === 5 || date.weekday() === 6
              ? colors.red
              : colors.grayPrimary
        }
      })}
      dayLabelsWrapper={{ borderTopWidth: 0 }}
      selectMonthTitle={'Selecione o mês em '}
      selectYearTitle="Selecione o ano"
      onDateChange={onChange}
    ></CalendarPicker>
  )
}
export default Calendar

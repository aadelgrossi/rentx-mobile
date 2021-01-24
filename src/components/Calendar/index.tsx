import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import CalendarPicker from 'react-native-calendar-picker'

import colors from '~/styles/colors'

interface CalendarProps {
  onChange(date: any, type: string): void
  initialDate?: Date
  endDate?: Date | undefined
}
export const Calendar: React.FC<CalendarProps> = ({
  onChange,
  initialDate,
  endDate
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
      customDayHeaderStyles={() => ({
        textStyle: {
          textTransform: 'uppercase',
          fontSize: 11,
          fontFamily: 'archivo-600',
          color: colors.grayAccent
        }
      })}
      initialDate={initialDate}
      selectedStartDate={initialDate}
      selectedEndDate={endDate}
      selectedDayColor={colors.red}
      selectedDayTextColor={colors.white}
      todayBackgroundColor={colors.white}
      selectedDayTextStyle={{ color: colors.red }}
      minRangeDuration={1}
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
        fontSize: 15,
        color: colors.grayAccent
      }}
      selectedRangeEndStyle={{
        flex: 1,
        backgroundColor: colors.red,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }}
      scaleFactor={380}
      customDatesStyles={date => ({
        textStyle: {
          fontFamily: 'inter-500',
          fontSize: 15,
          color:
            date.weekday() === 0 || date.weekday() === 6
              ? colors.grayAccent
              : colors.black
        }
      })}
      textStyle={{
        fontFamily: 'archivo-600',
        fontSize: 20,
        color: colors.black
      }}
      headerWrapperStyle={{ paddingHorizontal: 20 }}
      selectedRangeStartTextStyle={{ color: colors.white }}
      selectedRangeEndTextStyle={{ color: colors.white }}
      dayLabelsWrapper={{ borderTopWidth: 0 }}
      selectMonthTitle="Selecione o mês em "
      selectYearTitle="Selecione o ano"
      onDateChange={onChange}
    />
  )
}

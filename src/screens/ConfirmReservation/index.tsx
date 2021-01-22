import React from 'react'

import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Button, Prompt } from '~/components'
import { ReservationParamList, AppRoutesParamList } from '~/navigation/types'

interface ConfirmReservationProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ReservationParamList, 'ConfirmReservation'>,
    StackNavigationProp<AppRoutesParamList>
  >
}

export const ConfirmReservation: React.FC<ConfirmReservationProps> = ({
  navigation
}) => {
  return (
    <Prompt
      title="Carro alugado!"
      content="Agora você só precisa ir
      até a concessionária da RENTX e 
      buscar seu automóvel."
      type="done"
    >
      <Button
        style={{ marginTop: 'auto' }}
        variant
        onPress={() => navigation.navigate('Tabs', { screen: 'Reservations' })}
      >
        Ok
      </Button>
    </Prompt>
  )
}

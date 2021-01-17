import React from 'react'

import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Button, Prompt } from '~/components'
import { ReservationParamList, AppRoutesParamList } from '~/navigation/types'

export const ConfirmReservation: React.FC<{
  navigation: CompositeNavigationProp<
    StackNavigationProp<ReservationParamList, 'ConfirmReservation'>,
    StackNavigationProp<AppRoutesParamList>
  >
}> = ({ navigation }) => {
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

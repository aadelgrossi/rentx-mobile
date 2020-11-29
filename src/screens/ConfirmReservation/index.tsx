import React from 'react'

import { NavigationProp } from '@react-navigation/native'

import { ReservationParamList } from '../../../types'
import Button from '../../components/Button'
import Prompt from '../../components/Prompt'

const ConfirmReservation: React.FC<{
  navigation: NavigationProp<ReservationParamList, 'CarDetails'>
}> = ({ navigation }) => {
  return (
    <Prompt
      title="Carro alugado!"
      content="Agora você só precisa ir
      até a concessionária da RENTX
      pegar o seu automóvel."
      type="done"
    >
      <Button
        style={{ marginTop: 'auto' }}
        variant
        onPress={() => navigation.navigate('Listing')}
      >
        Ok
      </Button>
    </Prompt>
  )
}

export default ConfirmReservation

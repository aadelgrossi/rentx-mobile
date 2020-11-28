import React from 'react'

import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'
import Prompt from '../../components/Prompt'

const ConfirmReservation: React.FC = () => {
  const navigation = useNavigation()
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
        onPress={() => navigation.navigate('Reservations')}
      >
        Ok
      </Button>
    </Prompt>
  )
}

export default ConfirmReservation

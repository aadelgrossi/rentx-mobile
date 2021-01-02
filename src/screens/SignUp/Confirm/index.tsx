import React from 'react'

import { useNavigation } from '@react-navigation/native'

import Button from '../../../components/Button'
import Prompt from '../../../components/Prompt'

export const Confirm: React.FC = () => {
  const navigation = useNavigation()

  return (
    <Prompt
      title="Conta criada!"
      content="Entre agora com sua conta para aproveitar."
      type="done"
    >
      <Button
        style={{ marginTop: 'auto' }}
        variant
        onPress={() => navigation.navigate('SignIn')}
      >
        Retornar para o login
      </Button>
    </Prompt>
  )
}

import React from 'react'

import { useNavigation } from '@react-navigation/native'

import Button from '../../../components/Button'
import Prompt from '../../../components/Prompt'

const UpdateConfirm: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Prompt
      title="Feito!"
      content="Suas informações foram atualizadas."
      type="done"
    >
      <Button
        style={{ marginTop: 'auto' }}
        variant
        onPress={() => navigation.navigate('Main')}
      >
        Voltar
      </Button>
    </Prompt>
  )
}

export default UpdateConfirm

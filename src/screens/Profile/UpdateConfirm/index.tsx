import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Button, Prompt } from '~/components'

export const UpdateConfirm: React.FC = () => {
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

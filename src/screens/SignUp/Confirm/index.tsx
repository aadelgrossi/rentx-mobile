import React from 'react'

import { RouteProp } from '@react-navigation/native'

import { Button, Prompt } from '~/components'
import { useAuth } from '~/hooks'
import { SignUpRoutesParamList } from '~/navigation/types'

interface ConfirmProps {
  route: RouteProp<SignUpRoutesParamList, 'SignUpConfirm'>
}

export const Confirm: React.FC<ConfirmProps> = ({ route }) => {
  const { authorizeWith } = useAuth()
  const { authData } = route.params

  return (
    <Prompt
      title="Conta criada!"
      content="Seja bem-vindo ao RentX."
      type="done"
    >
      <Button
        style={{ marginTop: 'auto' }}
        variant
        onPress={() => authorizeWith(authData)}
      >
        Começar
      </Button>
    </Prompt>
  )
}

import React from 'react'

import { RouteProp } from '@react-navigation/native'

import Button from '~/components/Button'
import Prompt from '~/components/Prompt'
import { useAuth } from '~/hooks'
import { SignUpRoutesParamList } from '~/navigation/types'

interface ConfirmProps {
  route: RouteProp<SignUpRoutesParamList, 'SignUpConfirm'>
}

export const Confirm: React.FC<ConfirmProps> = ({ route }) => {
  const { authorize } = useAuth()
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
        onPress={() => authorize(authData)}
      >
        Começar
      </Button>
    </Prompt>
  )
}

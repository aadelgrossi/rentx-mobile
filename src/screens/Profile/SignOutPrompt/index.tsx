import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { Button, Prompt } from '~/components'
import { useAuth } from '~/hooks'

import { ButtonGroup } from './styles'

export const SignOutPrompt: React.FC = () => {
  const { signOut } = useAuth()
  const navigation = useNavigation()
  return (
    <Prompt
      title="Sair do rentX"
      content="Tem certeza que deseja encerrar sua sessão?"
      type="quit"
    >
      <ButtonGroup>
        <Button style={{ width: 156 }} onPress={() => navigation.goBack()}>
          Não
        </Button>
        <Button
          style={{ width: 156, marginLeft: 16 }}
          variant
          onPress={() => signOut()}
        >
          Sim
        </Button>
      </ButtonGroup>
    </Prompt>
  )
}

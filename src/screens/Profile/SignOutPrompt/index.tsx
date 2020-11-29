import React from 'react'

import { useNavigation } from '@react-navigation/native'

import Button from '../../../components/Button'
import Prompt from '../../../components/Prompt'
import { useAuth } from '../../../hooks/useAuth'
import { ButtonGroup } from './styles'

const SignOutPrompt: React.FC = () => {
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

export default SignOutPrompt

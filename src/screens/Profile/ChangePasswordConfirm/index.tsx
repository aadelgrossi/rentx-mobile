import React, { useCallback } from 'react'

import { Button, Prompt } from '~/components'
import { useAuth } from '~/hooks'

export const ChangePasswordConfirm: React.FC = () => {
  const { signOut } = useAuth()

  const handlePasswordPromptConfirm = useCallback(() => {
    signOut()
  }, [])

  return (
    <Prompt
      title="Feito!"
      content="Sua senha foi atualizada. Faça o login novamente."
      type="done"
    >
      <Button
        style={{ marginTop: 'auto' }}
        variant
        onPress={handlePasswordPromptConfirm}
      >
        Voltar
      </Button>
    </Prompt>
  )
}

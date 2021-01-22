import React from 'react'

import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { Button, Prompt } from '~/components'
import { ProfileParamList, TabRoutesParamList } from '~/navigation/types'

interface UpdateInfoConfirmProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<ProfileParamList, 'UpdateConfirm'>,
    StackNavigationProp<TabRoutesParamList>
  >
}

export const UpdateConfirm: React.FC<UpdateInfoConfirmProps> = ({
  navigation
}) => {
  return (
    <Prompt
      title="Feito!"
      content="Suas informações foram atualizadas."
      type="done"
    >
      <Button
        style={{ marginTop: 'auto' }}
        variant
        onPress={() => navigation.navigate('Profile')}
      >
        Voltar
      </Button>
    </Prompt>
  )
}

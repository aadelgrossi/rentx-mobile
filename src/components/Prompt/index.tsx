import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native'

import doneIndicator from '~/assets/done.png'
import bgLogo from '~/assets/logo/bg.png'
import quitIndicator from '~/assets/quit.png'

import { Container, BackgroundImage, Contents, Title, Text } from './styles'

interface PromptProps {
  type: 'done' | 'quit'
  title: string
  content: string
}

export const Prompt: React.FC<PromptProps> = ({
  title,
  content,
  type,
  children
}) => {
  return (
    <Container>
      <BackgroundImage source={bgLogo} />
      <Contents>
        <Image source={type === 'done' ? doneIndicator : quitIndicator}></Image>

        <Title>{title}</Title>
        <Text>{content}</Text>
        {children}
      </Contents>
      <StatusBar style="light" />
    </Container>
  )
}

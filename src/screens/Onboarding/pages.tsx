import React from 'react'

import { Page } from 'react-native-onboarding-swiper'

import { PageIllustration, styles, NumberText, Icon } from './styles'

export const pages: Page[] = [
  {
    title: 'Primeiro, escolha a data',
    titleStyles: styles.title,
    backgroundColor: '#F2F3F5',
    subtitle:
      'Você é quem define um período, e nós mostraremos os carros disponíveis.',
    subTitleStyles: styles.subtitle,
    image: (
      <PageIllustration>
        <Icon name="calendar" />
        <NumberText>01</NumberText>
      </PageIllustration>
    )
  },
  {
    title: 'Depois, escolha o carro',
    subtitle:
      'Vários modelos para você dirigir seguro, com conforto e segurança.',
    titleStyles: styles.title,
    subTitleStyles: styles.subtitle,
    backgroundColor: '#F2F3F5',
    image: (
      <PageIllustration>
        <Icon name="car" />
        <NumberText>02</NumberText>
      </PageIllustration>
    )
  }
]

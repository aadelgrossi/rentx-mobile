import React from 'react'

import { TextInputProps } from 'react-native'

import RentIcon from '~/components/RentIcon'
import colors from '~/styles/colors'

import { Wrapper } from '../styles'
import { TextInput, IconContainer } from './styles'

export const SearchInput: React.FC<TextInputProps> = ({ style, ...rest }) => {
  return (
    <Wrapper style={style}>
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor={colors.grayAccent}
        spellCheck={false}
        autoCapitalize="none"
        autoCorrect={false}
        {...rest}
      />

      <IconContainer
        style={{ borderLeftWidth: 2, borderLeftColor: colors.white }}
      >
        <RentIcon color={colors.grayText} size={24} name="search" />
      </IconContainer>
    </Wrapper>
  )
}

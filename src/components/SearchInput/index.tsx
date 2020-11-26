import React from 'react'

import { TextInputProps } from 'react-native'

import colors from '../../styles/colors'
import RentIcon from '../RentIcon'
import { Wrapper, TextInput, IconContainer } from './styles'

const SearchInput: React.FC<TextInputProps> = ({ style, ...rest }) => {
  return (
    <Wrapper style={style}>
      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor={colors.grayAccent}
        spellCheck={false}
        autoCapitalize="none"
        autoCorrect={false}
        {...rest}
      ></TextInput>

      <IconContainer
        style={{ borderLeftWidth: 2, borderLeftColor: colors.white }}
      >
        <RentIcon color={colors.grayText} size={24} name="search"></RentIcon>
      </IconContainer>
    </Wrapper>
  )
}

export default SearchInput

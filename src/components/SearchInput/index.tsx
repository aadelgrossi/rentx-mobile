import React from 'react'

import { TextInputProps, View } from 'react-native'

import colors from '../../styles/colors'
import Input from '../Input'
import RentIcon from '../RentIcon'
import { IconContainer } from './styles'

interface InputProps extends TextInputProps {
  name: string
}

const SearchInput: React.FC<InputProps> = ({ style, ...rest }) => {
  return (
    <View style={style}>
      <Input {...rest}>
        <IconContainer
          style={{ borderLeftColor: colors.white, borderLeftWidth: 2 }}
        >
          <RentIcon color={colors.grayPrimary} name="search"></RentIcon>
        </IconContainer>
      </Input>
    </View>
  )
}

export default SearchInput

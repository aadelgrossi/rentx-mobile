import styled from 'styled-components/native'

import colors from '~/styles/colors'

export const Wrapper = styled.View<{ hasError?: boolean }>`
  height: 56px;
  margin-top: 8px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 56px;
  background-color: ${props =>
    props.hasError ? colors.hoverRed : colors.grayTertiary};
`

export const Divider = styled.View`
  position: absolute;
  width: 2px;
  height: 56px;
  background-color: ${colors.white};
  left: 56px;
  top: 0;
`

export const IconContainer = styled.View`
  width: 56px;
  justify-content: center;
  align-items: center;
`

export const TextInput = styled.TextInput`
  font-family: 'inter-400';
  color: ${colors.grayText};
  flex: 1;
  width: 100%;
  font-size: 15px;
  padding: 0 23px;
`

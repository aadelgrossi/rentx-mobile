import styled, { css } from 'styled-components/native'

import colors from '../../styles/colors'

export const Wrapper = styled.View`
  height: 56px;
  margin-top: 8px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`

const baseProps = css`
  background-color: ${colors.grayTertiary};
  height: 56px;
`

export const IconContainer = styled.View`
  ${baseProps}
  width: 56px;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
`

export const TextInput = styled.TextInput`
  ${baseProps}
  font-family: 'inter-400';
  color: ${colors.grayText};
  flex: 1;
  width: 100%;
  font-size: 15px;
  padding: 0 60px 0 23px;
`

export const ShowPassword = styled.TouchableOpacity`
  position: absolute;
  right: 30px;
`

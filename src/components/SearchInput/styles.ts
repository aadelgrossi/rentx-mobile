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
  background-color: ${colors.grayLightest};
  height: 56px;
`

export const IconContainer = styled.View`
  ${baseProps}
  width: 56px;
  justify-content: center;
  align-items: center;
`

export const TextInput = styled.TextInput`
  ${baseProps}
  font-family: 'inter-400';
  color: ${colors.grayText};
  flex: 1;
  width: 120px;
  font-size: 15px;
  padding: 0 60px 0 23px;
`

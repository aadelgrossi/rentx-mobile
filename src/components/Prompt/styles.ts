import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  background-color: ${colors.black};
`

export const BackgroundImage = styled.Image`
  margin-top: 60px;
  width: 100%;
  height: 260px;
`

export const Contents = styled.View`
  flex: 1;
  align-items: center;
  margin: -24px 24px 48px;
`

export const Title = styled.Text`
  font-family: 'archivo-600';
  font-size: 30px;
  color: ${colors.white};
  margin: 30px 0 10px;
`

export const Text = styled.Text`
  font-family: 'inter-400';
  font-size: 15px;
  text-align: center;
  width: 220px;
  color: ${colors.grayAccent};
`

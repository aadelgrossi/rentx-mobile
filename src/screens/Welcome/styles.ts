import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.black};
  justify-content: center;
`

export const Contents = styled.View`
  flex: 1;
  align-items: center;
  margin: 100px 24px 48px;
`

export const Title = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-size: 40px;
  margin-top: 100px;
  margin-bottom: 20px;
  font-family: 'archivo-600';
`

export const Text = styled.Text`
  font-family: 'inter-400';
  font-size: 16px;
  color: ${colors.grayLight};
`

export const Actions = styled.View`
  margin-top: auto;
  height: 130px;
  justify-content: space-between;
  width: 100%;
`

export const ButtonText = styled.Text`
  font-family: 'inter-600';
  font-size: 16px;
  color: ${colors.white};
`

import styled from 'styled-components/native'

import colors from '~/styles/colors'

export const Container = styled.View`
  width: 100%;
  height: 140px;
  background-color: ${colors.grayLightest};
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`

export const Info = styled.View`
  margin-left: 20px;
  width: 150px;
`

export const ModelInfo = styled.View``

export const Label = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'archivo-500';
  color: ${colors.grayAccent};
`

export const CarModel = styled.Text`
  font-family: 'archivo-600';
  font-size: 15px;
  color: ${colors.black};
`

export const AddInfo = styled.View`
  margin-top: 8px;
`

export const AddInfoContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: -4px;
  width: 110px;
`
export const RateValue = styled.Text`
  font-size: 15px;
  font-family: 'archivo-500';
  color: ${colors.red};
  margin-right: 20px;
`
export const CarPhoto = styled.Image`
  flex: 1;
  height: 100%;
`

import styled from 'styled-components/native'

import colors from '../../../../styles/colors'

export const DetailsContainer = styled.View`
  width: 100%;
  height: 128px;
  background-color: ${colors.grayLightest};
  padding: 10px 20px 10px;
  flex-direction: row;
  /* margin-top: 16px; */
  align-items: center;
`

export const Info = styled.View`
  margin-right: 20px;
  width: 120px;
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
  color: ${colors.grayPrimary};
`

export const AddInfo = styled.View`
  margin-top: 10px;
`

export const AddInfoContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
`
export const TotalValue = styled.Text`
  font-size: 15px;
  font-family: 'archivo-500';
  color: ${colors.red};
  margin-right: 20px;
`

export const CarPhoto = styled.Image`
  flex: 1;
  height: 100%;
`

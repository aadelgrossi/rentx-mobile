import styled from 'styled-components/native'

import colors from '../../../styles/colors'
import RentIcon from '../../RentIcon'

export const Container = styled.View`
  width: 100%;
  height: 240px;
  background-color: ${colors.grayLightest};
  margin-bottom: 16px;
  padding: 40px;
  flex-direction: row;
  align-items: center;
`

export const ModelInfo = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
`

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
  position: absolute;
  top: 20px;
  right: 20px;
`

export const FuelIcon = styled(RentIcon)`
  position: absolute;
  bottom: 20px;
  left: 20px;
`

export const AddInfoContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100px;
`
export const RateValue = styled.Text`
  font-size: 15px;
  font-family: 'archivo-500';
  color: ${colors.red};
`
export const CarPhoto = styled.Image`
  flex: 1;
  height: 100%;
  margin-top: 20px;
`

import styled from 'styled-components/native'

import colors from '~/styles/colors'

export const CarModel = styled.Text`
  font-family: 'archivo-600';
  font-size: 15px;
  color: ${colors.grayPrimary};
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
  margin-right: 10px;
`

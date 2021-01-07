import styled from 'styled-components/native'

import RentIcon from '../../RentIcon'
import { Container } from '../styles'

export const LargeContainer = styled(Container)`
  height: 240px;
  padding: 25px;
`

export const ModelInfo = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
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

export const CarPhoto = styled.Image`
  flex: 1;
  height: 100%;
  margin-top: 20px;
`

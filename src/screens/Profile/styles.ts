import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
  flex-direction: column;
`

export const Header = styled.View`
  background-color: ${colors.black};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 48px 24px;
  height: 200px;
`

export const HeaderTitle = styled.Text`
  font-family: 'archivo-600';
  color: ${colors.white};
  font-size: 30px;
  line-height: 30px;
`

export const Contents = styled.View`
  align-items: center;
  padding: 0 24px 24px;
`

export const ProfileContainer = styled.View``

export const ProfilePicture = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  margin-top: -90px;
`

export const SwitchPicture = styled(RectButton)`
  position: absolute;
  bottom: 0;
  right: 10px;
  background-color: ${colors.red};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`

export const UserName = styled.Text`
  font-family: 'archivo-600';
  font-size: 30px;
  color: ${colors.black};
  width: 180px;
  text-align: center;
  margin-top: 16px;
`

export const InfoItem = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const InfoTitle = styled.Text`
  color: ${colors.grayText};
  font-family: 'inter-400';
  font-size: 15px;
`

export const InfoValue = styled.Text`
  color: ${colors.black};
  font-family: 'archivo-600';
`

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  margin: 16px 0;
  background-color: ${colors.grayLighter};
`

export const FavoriteCarContainer = styled.View`
  width: 100%;
  justify-content: space-between;
`

export const CarCard = styled.View`
  height: 128px;
  background-color: ${colors.grayLight};
`

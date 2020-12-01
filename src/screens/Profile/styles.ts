import styled, { css } from 'styled-components/native'

import colors from '../../styles/colors'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
  flex-direction: column;
`

export const Spacing = styled.View`
  background-color: ${colors.black};
  height: 100px;
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

export const UserName = styled.Text`
  font-family: 'archivo-600';
  font-size: 30px;
  color: ${colors.black};
  width: 180px;
  text-align: center;
  margin-top: 16px;
`

const bottomSectionItems = css`
  width: 100%;
  justify-content: space-between;
`

export const InfoItem = styled.View`
  ${bottomSectionItems}
  flex-direction: row;
`

export const FavoriteCarContainer = styled.View`
  ${bottomSectionItems}
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

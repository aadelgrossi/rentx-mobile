import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import { RentIcon } from '~/components'
import colors from '~/styles/colors'

export const Container = styled.View`
  flex: 1;
`

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'archivo-700',
    fontSize: 48,
    lineHeight: 48,
    color: colors.grayPrimary,
    maxWidth: 250,
    textAlign: 'left',
    marginLeft: -80,
    marginTop: -60,
    paddingTop: 80
  },
  subtitle: {
    fontFamily: 'inter-400',
    fontSize: 15,
    color: colors.grayText,
    lineHeight: 25,
    maxWidth: 220,
    marginLeft: -100,
    textAlign: 'left'
  },
  illustrations: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export const NumberText = styled.Text`
  color: ${colors.grayLight};
  font-size: 80px;
  font-family: 'archivo-700';
`

export const PageIllustration = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  padding: 0 16px;
`

export const SkipWrapper = styled.View`
  margin-left: 100px;
`

export const SkipText = styled.Text`
  font-family: 'inter-500';
  color: ${colors.grayText};
`

export const Icon = styled(RentIcon).attrs({
  size: 140,
  color: colors.red
})``

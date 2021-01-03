import React from 'react'

import noPicture from '~/assets/profilePicPlaceholder.png'
import { useAuth } from '~/hooks'

import { Container } from './styles'

const ProfilePicture: React.FC = () => {
  const { user } = useAuth()

  return (
    <Container source={user.avatar ? { uri: user.avatar.url } : noPicture} />
  )
}

export default ProfilePicture

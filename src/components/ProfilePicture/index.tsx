import React from 'react'

import { useAuth } from '~/hooks'

import { Avatar, Icon, Placeholder, PreviewImage } from './styles'

interface ProfilePictureProps {
  uri?: string
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ uri }) => {
  const { user } = useAuth()

  if (uri) {
    return <PreviewImage source={{ uri }} />
  } else if (user?.avatar) {
    return (
      <Avatar
        uri={user?.avatar.url}
        key={`${user?.avatar.url}-${new Date().getTime()}`}
      />
    )
  } else {
    return (
      <Placeholder>
        <Icon name="person" />
      </Placeholder>
    )
  }
}

import React from 'react'

import { useAuth } from '~/hooks'

import { Avatar, Icon, Placeholder } from './styles'

interface ProfilePictureProps {
  uri?: string
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ uri }) => {
  const {
    user: { avatar }
  } = useAuth()

  const randomKey = (uri || avatar?.url) + new Date().getTime()

  if (uri) {
    return <Avatar source={{ uri }} key={randomKey} />
  } else if (avatar) {
    return <Avatar source={{ uri: avatar.url }} key={randomKey} />
  } else {
    return (
      <Placeholder>
        <Icon name="person" />
      </Placeholder>
    )
  }
}

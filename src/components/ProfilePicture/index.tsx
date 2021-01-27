import React from 'react'

import { useQuery } from '@apollo/client'

import { USER_INFO } from '~/graphql'

import { Avatar, Icon, Placeholder } from './styles'

interface ProfilePictureProps {
  uri?: string
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({ uri }) => {
  const { data } = useQuery<{ me: User }>(USER_INFO)
  const randomKey = `${uri || data?.me.avatar?.url}-${new Date().getTime()}`

  if (uri) {
    return <Avatar source={{ uri }} key={randomKey} />
  } else if (data?.me.avatar) {
    return <Avatar source={{ uri: data.me.avatar.url }} key={randomKey} />
  } else {
    return (
      <Placeholder>
        <Icon name="person" />
      </Placeholder>
    )
  }
}

import React, { useCallback, useState } from 'react'

import { useMutation } from '@apollo/client'
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker'

import { UPDATE_AVATAR, USER_INFO } from '~/graphql'
import { useAuth } from '~/hooks'
import { uploadFile, deleteFile } from '~/services/upload'
import colors from '~/styles/colors'

import { ProfilePicture } from '../ProfilePicture'
import { Container, SwitchPicture, Icon, UploadProgress } from './styles'

interface UpdateAvatarResponse {
  updateAvatar: User
}

interface UpdateAvatarMutationVariables {
  data: {
    url: string
  }
}

export const UploadProfilePicture: React.FC = () => {
  const { user, updateUserInfo } = useAuth()
  const [updateAvatarInfoForUser] = useMutation<
    UpdateAvatarResponse,
    UpdateAvatarMutationVariables
  >(UPDATE_AVATAR)
  const [previewImage, setPreviewImage] = useState<string>('')
  const [uploadProgress, setUploadProgress] = useState(0)

  const handlePhotoSelect = useCallback(async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })

    if (!result.cancelled) {
      const { uri, type } = result
      const filename = uri.replace(/^.*[\\/]/, '')

      setPreviewImage(uri)

      if (user.avatar) {
        const previousPicture = user.avatar.url.replace(/^.*[\\/]/, '')
        await deleteFile({ key: previousPicture })
      }

      const response = await uploadFile({ uri, filename, type })

      response.on('httpUploadProgress', progress => {
        const progressPercentage = Math.round(
          (progress.loaded / progress.total) * 100
        )
        setUploadProgress(progressPercentage)
      })

      response.on('success', () => {
        setUploadProgress(0)
      })

      const { data } = await updateAvatarInfoForUser({
        variables: {
          data: { url: `${process.env.AWS_S3_PUBLIC_URL}/${filename}` }
        },
        refetchQueries: [{ query: USER_INFO }],
        awaitRefetchQueries: true
      })

      if (data) updateUserInfo(data.updateAvatar)
    }
  }, [updateAvatarInfoForUser, updateUserInfo, user.avatar])

  return (
    <Container>
      <UploadProgress
        fill={uploadProgress}
        tintColor={uploadProgress === 100 ? colors.red : 'transparent'}
      />
      <ProfilePicture uri={previewImage} />
      <SwitchPicture onPress={handlePhotoSelect}>
        <Icon />
      </SwitchPicture>
    </Container>
  )
}

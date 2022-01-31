import React from 'react'

import SkeletonContent from '@vitu.soares/react-native-skeleton-content'
import { ICustomViewStyle } from '@vitu.soares/react-native-skeleton-content/lib/Constants'
import { StyleProp, ViewStyle } from 'react-native'

import colors from '~/styles/colors'

interface SkeletonProps {
  containerStyles?: StyleProp<ViewStyle>
  layout: ICustomViewStyle[]
}

export const Skeleton: React.FC<SkeletonProps> = ({
  containerStyles = {},
  layout
}) => {
  return (
    <SkeletonContent
      containerStyle={{
        backgroundColor: colors.grayLightest,
        padding: 20,
        ...(containerStyles as any)
      }}
      boneColor={colors.grayLight}
      highlightColor={colors.grayLighter}
      isLoading={true}
      layout={layout}
    />
  )
}

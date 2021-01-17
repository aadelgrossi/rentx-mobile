import React from 'react'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'

import IcomoonConfig from '~/../assets/fonts/rent-icons.json'

interface IconProps {
  color: string
  size?: number
  name: RentIcons
}

const IconSet = createIconSetFromIcoMoon(
  IcomoonConfig,
  'rent-icons',
  'icomoon.ttf'
)

export const RentIcon: React.FC<IconProps> = ({ size = 28, ...props }) => {
  return <IconSet {...props} size={size} />
}

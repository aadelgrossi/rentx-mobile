import React from 'react'

import { createIconSetFromIcoMoon } from '@expo/vector-icons'

import IcomoonConfig from '../../../assets/fonts/rent-icons.json'

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

const RentIcon: React.FC<IconProps> = props => {
  return <IconSet {...props}></IconSet>
}

RentIcon.defaultProps = { size: 28 }

export default RentIcon

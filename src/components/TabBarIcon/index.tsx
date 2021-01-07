import React from 'react'

import RentIcon from '../RentIcon'
import { FocusedDetail } from './styles'

interface IconProps {
  name: RentIcons
  color: string
  focused: boolean
}

const TabBarIcon: React.FC<IconProps> = ({ name, color, focused }) => (
  <>
    <RentIcon color={color} size={30} name={name} />
    {focused && <FocusedDetail />}
  </>
)

export default TabBarIcon

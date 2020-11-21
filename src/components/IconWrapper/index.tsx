import React from 'react'

import { Container, ActiveDetail } from './styles'

interface TabIconProps {
  focused: boolean
}

const TabBarIconWrapper: React.FC<TabIconProps> = ({ children, focused }) => {
  return (
    <Container>
      {children}
      {focused && <ActiveDetail />}
    </Container>
  )
}

export default TabBarIconWrapper

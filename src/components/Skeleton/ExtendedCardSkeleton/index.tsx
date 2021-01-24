import React from 'react'

import { SingleSkeleton } from './single'

export const ExtendedCardSkeletonList: React.FC = () => {
  return (
    <>
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
    </>
  )
}

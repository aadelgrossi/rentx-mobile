import React from 'react'

import { SingleSkeleton } from './single'

export const SmallCardSkeletonList: React.FC = () => {
  return (
    <>
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
    </>
  )
}

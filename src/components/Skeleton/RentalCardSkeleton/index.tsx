import React from 'react'

import { SingleSkeleton } from './single'

export const RentalCardSkeletonList: React.FC = () => {
  return (
    <>
      <SingleSkeleton />
      <SingleSkeleton />
      <SingleSkeleton />
    </>
  )
}

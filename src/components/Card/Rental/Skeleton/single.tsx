import React from 'react'

import { Skeleton } from '~/components/Skeleton'

import { SingleSkeleton as SmallSkeleton } from '../../Small/Skeleton/single'

export const SingleSkeleton: React.FC = () => {
  const randomWidth = Math.floor(Math.random() * (70 - 40 + 1)) + 40

  return (
    <>
      <SmallSkeleton />
      <Skeleton
        layout={[
          {
            flexDirection: 'row',
            justifyContent: 'space-between',
            children: [
              {
                key: 'periodLabel',
                width: 70,
                height: 10,
                borderRadius: 0
              },
              {
                flexDirection: 'row',
                children: [
                  {
                    key: 'startDate',
                    width: randomWidth + 50,
                    height: 12,
                    marginRight: 24,
                    borderRadius: 0
                  },
                  {
                    key: 'endDate',
                    width: randomWidth + 50,
                    height: 12,
                    borderRadius: 0
                  }
                ]
              }
            ]
          }
        ]}
        containerStyles={{
          height: 40,
          marginTop: 4,
          marginBottom: 16,
          paddingVertical: 12
        }}
      />
    </>
  )
}

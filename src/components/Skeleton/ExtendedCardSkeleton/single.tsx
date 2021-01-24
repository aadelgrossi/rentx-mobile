import React from 'react'

import { Skeleton } from '../Base'

export const SingleSkeleton: React.FC = () => {
  const randomWidth = Math.floor(Math.random() * (60 - 30 + 1)) + 30

  return (
    <Skeleton
      containerStyles={{ height: 240, marginBottom: 16 }}
      layout={[
        {
          flexDirection: 'column',
          children: [
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              children: [
                {
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  children: [
                    {
                      key: 'manufacturer',
                      width: randomWidth + 20,
                      height: 8,
                      marginBottom: 8,
                      borderRadius: 0
                    },
                    {
                      key: 'model',
                      width: randomWidth + 50,
                      height: 10,
                      borderRadius: 0
                    }
                  ]
                },
                {
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  marginRight: 10,
                  children: [
                    {
                      key: 'dayLabel',
                      width: randomWidth - 10,
                      height: 8,
                      marginBottom: 8,
                      borderRadius: 0
                    },
                    {
                      key: 'dailyRate',
                      width: randomWidth + 10,
                      height: 10,
                      borderRadius: 0
                    }
                  ]
                }
              ]
            },
            {
              key: 'photo',
              width: 270,
              height: 130,
              alignSelf: 'center',
              marginTop: 16,
              borderRadius: 0
            },
            {
              key: 'fuelType',
              width: 28,
              height: 18,
              marginTop: 8,
              borderRadius: 0
            }
          ]
        }
      ]}
    />
  )
}

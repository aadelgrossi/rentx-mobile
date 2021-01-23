import React from 'react'

import { Skeleton } from '~/components/Skeleton'

export const SingleSkeleton: React.FC = () => {
  const randomWidth = Math.floor(Math.random() * (60 - 30 + 1)) + 30

  return (
    <Skeleton
      containerStyles={{ marginBottom: 16 }}
      layout={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          children: [
            {
              flexDirection: 'column',
              marginTop: 10,
              children: [
                {
                  key: 'manufacturer',
                  width: randomWidth,
                  height: 8,
                  marginBottom: 8,
                  borderRadius: 0
                },
                {
                  key: 'model',
                  width: randomWidth + 50,
                  height: 12,
                  marginBottom: 24,
                  borderRadius: 0
                },
                {
                  flexDirection: 'row',
                  width: 110,
                  justifyContent: 'space-between',
                  children: [
                    {
                      flexDirection: 'column',
                      children: [
                        {
                          key: 'daysLabel',
                          width: randomWidth - 10,
                          height: 8,
                          marginBottom: 8,
                          borderRadius: 0
                        },
                        {
                          key: 'dailyRate',
                          width: randomWidth,
                          height: 10,
                          marginBottom: 8,
                          borderRadius: 0
                        }
                      ]
                    },
                    {
                      key: 'fuelType',
                      width: 24,
                      height: 20,
                      marginLeft: 20,
                      marginTop: 8,
                      borderRadius: 0
                    }
                  ]
                }
              ]
            },
            {
              key: 'photo',
              width: 200,
              height: 90,

              borderRadius: 0
            }
          ]
        }
      ]}
    />
  )
}

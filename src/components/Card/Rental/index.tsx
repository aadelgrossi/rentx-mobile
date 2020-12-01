import React from 'react'

import ReservationDateContent from './ReservationDateContent'
import UpperCardContent from './UpperCardContent'

const RentalCard: React.FC<Rental> = props => {
  return (
    <>
      <UpperCardContent {...props} />
      <ReservationDateContent {...props} />
    </>
  )
}

export default RentalCard

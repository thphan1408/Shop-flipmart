import React from 'react'

interface IRatingProps {
  className?: string
  noneActiveClassName?: string
  rating: number
}

const Rating: React.FC<IRatingProps> = () => {
  return <div>Rating</div>
}

export default Rating

import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({data}) => {
    const imageURL = useSelector(state => state.netflixData.imageURL)
  return (
    <div>
      <img 
        src={imageURL + data?.poster_path}
      />
    </div>
  )
}

export default Card

import React from 'react'
import '../component/DestinationCard.css'

function DestinationCard({name,location,image,description,price}) {
  return (
    
    <div className='main'>
        <div className='sub'>
        
            <h3>{name}</h3>
            <h3>{location}</h3>
            <img src={image} alt="Image" />
            <p>{description}</p>
            <h3>{price}</h3>

        </div>
    </div>
  )
}

export default DestinationCard
import React from 'react'
import image1 from '../assets/images/A.png'
const CardsMaps = () => {
    const data = [
        {
            id: 1,
            name:'ART COLLECTION',
            Image:{image1}
        }
    ]
  return (
    <div>
    {data.map((item) => (
      <div key={item.name} item={image1} />
    ))}
  </div>
  )
}

export default CardsMaps

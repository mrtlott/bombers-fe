import React from 'react'

import person1 from '../public/pana.png'
import person2 from '../public/Bear.png'
import person3 from '../public/BTT.png'
import person4 from '../public/robblee.png'
import person5 from '../public/BuddhaCoy.png'
import './TeamPhotos.css'



const photosArr = [person1, person2, person3, person4, person5]


console.log(photosArr)
const TeamPhotos = () => {
  return (
    <>
        <div>TeamPhotos</div>
        {photosArr.map(photo => {
            return <img src={photo} alt="" className='photo'/>
        })}
    </>
  )
}





export default TeamPhotos
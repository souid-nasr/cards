import React from 'react'
import CardData from '../data/univData'
import University from './Card'
import './style.css'


function Cards() {
  return (
    <div className="wrapper">
        {CardData.map((el,value)=>(
            <University key={el.id} image={el.image} description={el.description} title={el.title} url={el.url}/>
        ))}
    </div>
  )
}

export default Cards
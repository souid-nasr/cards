import React from 'react'
import './style.css'
function University(props) {
  return (
  <div className="card">
    <div className="card__body">
      <img src={props.image} className="card__image" alt='university' />
      <h2 className="card__title">{props.title}</h2>
      <p className="card__description">{props.description}</p>
      <a>Learn more... </a>
    </div>
    <button className="card__btn">Apply Now</button>
  </div>

  )
}

export default University
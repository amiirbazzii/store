import React from 'react';

import './Card.scss';

const Card = (props) => (
  <div className='card-data'>
    <img src={props.img} alt={props.title} className='card-image img-fluid' />
    <h3 className='card-title'>{props.title}</h3>
    <p className='card-price'>{props.price}</p>
  </div>
);

export default Card;

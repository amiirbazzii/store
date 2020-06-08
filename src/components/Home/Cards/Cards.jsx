import React from 'react';

import './Cards.scss';

import Card from './Card/Card';

import CardImg1 from '../../../static/images/home/card-1.png';
import CardImg2 from '../../../static/images/home/card-2.png';
import CardImg3 from '../../../static/images/home/card-3.png';
import CardImg4 from '../../../static/images/home/card-4.png';
import AddToCart from '../../../static/icons/cards/add-to-cart.png';

const cardData = [
  {
    img: CardImg1,
    title: 'اسپیکر همراه سونی',
    price: 'یک میلیون تومان',
  },
  {
    img: CardImg2,
    title: 'هدفون مایکروسافت',
    price: 'دو میلیون تومان',
  },
  {
    img: CardImg3,
    title: 'تلویزیون 58 اینچ سونی',
    price: 'ده میلیون تومان',
  },
  {
    img: CardImg4,
    title: 'تلویزیون فوق باریک سونی',
    price: 'یازده میلیون تومان',
  },
];

const Cards = () => {
  return (
    <div className='cards'>
      {cardData.map((item, index) => (
        <div className='card box' key={index}>
          <div className='cards-data'>
            <Card title={item.title} img={item.img} price={item.price} />
          </div>
          <div className='card-btns'>
            <button className='card-btn'>مشاهده محصول</button>
            <button className='add-to-cart-btn'>
              <img src={AddToCart} alt='AddToCart' />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;

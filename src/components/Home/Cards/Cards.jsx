import React from 'react';

import './Cards.scss';

import CardImg1 from '../../../static/images/home/card-1.png';
import CardImg2 from '../../../static/images/home/card-2.png';
import CardImg3 from '../../../static/images/home/card-3.png';
import CardImg4 from '../../../static/images/home/card-4.png';
import AddToCart from '../../../static/icons/cards/add-to-cart.png';

const Cards = () => {
  return (
    <div className='row cards'>
      <div className='box card col-md-3 d-block'>
        <img
          src={CardImg1}
          alt='image1'
          className='card-image img-fluid pb-2'
        />
        <h3 className='title'>اسپیکر همراه سونی</h3>
        <p className='price'>یک میلیون تومان</p>

        <div className='d-flex card-btns'>
          <button className='card-btn col-8 mr-2'>مشاهده محصول</button>
          <button className='col-3 mr-2 add-to-cart-btn'>
            <img src={AddToCart} alt='AddToCart' />
          </button>
        </div>
      </div>

      <div className='box card col-md-3 d-block'>
        <img
          src={CardImg2}
          alt='image1'
          className='card-image img-fluid pb-2'
        />
        <h3 className='title'>اسپیکر همراه سونی</h3>
        <p className='price'>یک میلیون تومان</p>

        <div className='d-flex card-btns'>
          <button className='card-btn col-8 mr-2'>مشاهده محصول</button>
          <button className='col-3 mr-2 add-to-cart-btn'>
            <img src={AddToCart} alt='AddToCart' />
          </button>
        </div>
      </div>

      <div className='box card col-md-3 d-block'>
        <img
          src={CardImg3}
          alt='image1'
          className='card-image img-fluid pb-2'
        />
        <h3 className='title'>اسپیکر همراه سونی</h3>
        <p className='price'>یک میلیون تومان</p>

        <div className='d-flex card-btns'>
          <button className='card-btn col-8 mr-2'>مشاهده محصول</button>
          <button className='col-3 mr-2 add-to-cart-btn'>
            <img src={AddToCart} alt='AddToCart' />
          </button>
        </div>
      </div>

      <div className='box card col-md-3 d-block'>
        <img
          src={CardImg4}
          alt='image1'
          className='card-image img-fluid pb-2'
        />
        <h3 className='title'>اسپیکر همراه سونی</h3>
        <p className='price'>یک میلیون تومان</p>

        <div className='d-flex card-btns'>
          <button className='card-btn col-8 mr-2'>مشاهده محصول</button>
          <button className='col-3 mr-2 add-to-cart-btn'>
            <img src={AddToCart} alt='AddToCart' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import React from 'react';

import '../../static/styles/home/Hero.scss';

import HeroImage from '../../static/images/home/nikolay-tarashchenko-ep6Afz45gH0-unsplash.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='box'>
        <div className='col-md-5 intro'>
          <h2 className='title'>بزرگترین فروشگاه لوازم الکترونیک کشور</h2>
          <p className='text'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد{' '}
          </p>
        </div>
        <div className='col-md-7 image'>
          <img className='img-fluid' src={HeroImage} alt='Heroimage' />
        </div>
      </div>
    </div>
  );
};

export default Hero;

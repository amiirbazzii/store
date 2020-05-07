import React from 'react';

import A1 from '../../static/images/home/article-1.png';
import A2 from '../../static/images/home/article-2.png';

import '../../static/styles/home/article.scss';

const Article = () => {
  return (
    <>
      <div className='article row'>
        <div className='col-3 article-image'>
          <img src={A1} alt='a1' />
        </div>
        <div className='col-9 article-text'>
          <h3 className='article-title'>بررسی تخصصی دوربین حرفه ای سونی</h3>
          <p className='article-dec'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون
          </p>
          <a href='/'>ادامه مطلب</a>
        </div>
      </div>
      <div className='article row'>
        <div className='col-3 article-image'>
          <img src={A2} alt='a1' />
        </div>
        <div className='col-9 article-text'>
          <h3 className='article-title'>بررسی تخصصی دوربین حرفه ای سونی</h3>
          <p className='article-dec'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون
          </p>
          <a href='/'>ادامه مطلب</a>
        </div>
      </div>
    </>
  );
};

export default Article;

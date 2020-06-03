import React from 'react';

import Article from './Article';
// import Slider from './Slider1';
import Car from './Carousel';

import '../../static/styles/home/articles.scss';

const Articles = () => {
  return (
    <div className='d-flex px-1 articles'>
      <div className='col-md-8 box articles-box ml-2 d-block'>
        <div className='articles-head col-12'>
          <div className='col-2 articles-title'>
            <h2>مقالات</h2>
          </div>
          <div className='col-3 '>
            <button className='articles-btn'>مقالات بیشتر</button>
          </div>
        </div>

        <div className='articles'>
          <Article />
        </div>
      </div>
      <div className='col-md-4 box mx-3 slider'>
        <Car />
      </div>
    </div>
  );
};

export default Articles;

import React from 'react';

import Articles from './Articles/Articles';
import Carousel from '../../Carousel/Carousel';

import './Blog.scss';

const Blog = () => (
  <div className='blog'>
    <div className='box articles-box'>
      <div className='articles-head'>
        <div className='articles-title'>
          <h2>مقالات</h2>
        </div>
        <div className='articles-btn'>
          <button>مقالات بیشتر</button>
        </div>
      </div>

      <div className='articles'>
        <Articles />
      </div>
    </div>
    <div className='box carousel'>
      <Carousel />
    </div>
  </div>
);

export default Blog;

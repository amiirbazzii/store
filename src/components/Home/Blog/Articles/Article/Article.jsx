import React from 'react';

import './Article.scss';

const Article = (props) => {
  return (
    <>
      <div className='articel-data'>
        <div className='article-img'>
          <img src={props.img} alt={props.title} className='img-fluid' />
        </div>
        <div className='article-dec'>
          <h3 className='article-title'>{props.title}</h3>
          <p className='article-text'>{props.text}</p>
          <a href='/'>ادامه مطلب</a>
        </div>
      </div>
    </>
  );
};

export default Article;

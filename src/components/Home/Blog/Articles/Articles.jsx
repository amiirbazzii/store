import React from 'react';

import Article from './Article/Article';

import A1 from '../../../../static/images/home/article-1.png';
import A2 from '../../../../static/images/home/article-2.png';

import './Articles.scss';

const articleData = [
  {
    img: A1,
    title: 'بررسی تخصصی دوربین حرفه ای سونی',
    text:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون',
  },
  {
    img: A2,
    title: 'کدام لپتاپ مناسب برنامه‌نویسی است؟',
    text:
      'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون',
  },
];

const Articles = () => {
  return (
    <div>
      {articleData.map((item, index) => (
        <Article
          img={item.img}
          title={item.title}
          text={item.text}
          key={index}
        />
      ))}
    </div>
  );
};

export default Articles;

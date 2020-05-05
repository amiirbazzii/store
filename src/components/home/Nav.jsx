import React from 'react';

import '../../static/styles/home/nav.scss';
import '../../static/styles/home/searchBox.scss';

import { ReactComponent as Cart } from '../../static/icons/nav/cart.svg';

const Nav = () => {
  return (
    <div className='nav box p-3'>
      <div className='logo col-md-2 p-0'>
        <h2 className='m-0'>
          <span>E</span>
          -shop
        </h2>
      </div>
      <div className='menu-items col-md-6'>
        <ul className='items p-0'>
          <li>
            <a href='/'>صفحه اصلی</a>
          </li>
          <li>
            <a href='/'>دسته‌بندی</a>
          </li>
          <li>
            <a href='/'>وبلاگ</a>
          </li>
          <li>
            <a href='/'>درباره ما</a>
          </li>
          <li>
            <a href='/'>ارتباط با ما</a>
          </li>
        </ul>
      </div>
      <div className='search-box col-md-3 px-0'>
        <label htmlFor='inp' className='inp'>
          <input type='text' id='inp' placeholder='&nbsp;' />
          <span className='label'>جستجو کنید ...</span>
          <span className='focus-bg'></span>
        </label>
      </div>
      <div className='icon col-md-1 px-0'>
        <Cart />
      </div>
    </div>
  );
};

export default Nav;

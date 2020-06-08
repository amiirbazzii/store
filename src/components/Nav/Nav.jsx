import React from 'react';

import './Nav.scss';
import '../../static/styles/SearchBox.scss';

import { ReactComponent as Cart } from '../../static/icons/nav/cart.svg';

const Nav = () => {
  return (
    <div className='nav box'>
      <div className='d-flex'>
        <div className='logo'>
          <h2 className='-Shop'>
            <span className='E'>E</span>
            -shop
          </h2>
        </div>
        <div className='menu-items'>
          <ul className='items '>
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
      </div>
      <div className='d-flex'>
        <div className='search-box'>
          <label htmlFor='inp' className='inp'>
            <input type='text' id='inp' placeholder='&nbsp;' />
            <span className='label'>جستجو کنید ...</span>
            <span className='focus-bg'></span>
          </label>
        </div>
        <div className='icon'>
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Nav;

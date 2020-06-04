import React from 'react';

import { ReactComponent as Facebook } from '../../static/icons/footer/facebook.svg';
import { ReactComponent as Instagram } from '../../static/icons/footer/instagram-sketched.svg';
import { ReactComponent as Twitter } from '../../static/icons/footer/twitter.svg';
import { ReactComponent as Telegram } from '../../static/icons/footer/telegram.svg';

import '../../static/styles/home/footer.scss';

const Footer = () => {
  return (
    <div className='box footer'>
      <div className='footer-intro'>
        <p>فروشگاه لوازم الکترونیک</p>
        <p className='logo'>
          <span>E</span>-Shop
        </p>
      </div>
      <div className='social-media'>
        <Facebook />
        <Instagram />
        <Telegram />
        <Twitter />
      </div>
    </div>
  );
};
export default Footer;

import React from 'react';

import Property from './Property/Property';

import './Properites.scss';

import { ReactComponent as CreditCard } from '../../../static/icons/properties/credit-card.svg';
import { ReactComponent as DeliveryTruck } from '../../../static/icons/properties/delivery-truck.svg';
import { ReactComponent as DiscussIssue } from '../../../static/icons/properties/discuss-issue.svg';
import { ReactComponent as Hand } from '../../../static/icons/properties/hand.svg';

const Cards = [
  {
    icon: 'CreditCard',
    title: 'پرداخت امن',
    text: 'قابل اعتماد و مطمئن',
    id: 'askcjn651',
  },
  {
    icon: 'DeliveryTruck',
    title: 'ارسال رایگان',
    text: 'خرید بالای 100 هزار تومان',
    id: '35sdcsdc',
  },
  {
    icon: 'DiscussIssue',
    title: 'پشتیبانی',
    text: 'پشتیبانی اختصاصی محصولات',
    id: '65dcsdcv',
  },
  {
    icon: 'Hand',
    title: 'امکانات',
    text: 'فروشگاهی با انواع کالاها',
    id: '65dfvaq',
  },
];

const Properties = () => {
  return (
    <div className='properties'>
      <div className='property'>
        <div className='icon'>
          <CreditCard />
        </div>
        <div className='intro'>
          <Property
            key={Cards[0].id}
            title={Cards[0].title}
            text={Cards[0].text}
          />
        </div>
      </div>

      <div className='property'>
        <div className='icon'>
          <DeliveryTruck />
        </div>
        <div className='intro'>
          <Property
            key={Cards[1].id}
            title={Cards[1].title}
            text={Cards[1].text}
          />
        </div>
      </div>

      <div className='property'>
        <div className='icon'>
          <DiscussIssue />
        </div>
        <div className='intro'>
          <Property
            key={Cards[2].id}
            title={Cards[2].title}
            text={Cards[2].text}
          />
        </div>
      </div>

      <div className='property'>
        <div className='icon'>
          <Hand />
        </div>
        <div className='intro'>
          <Property
            key={Cards[3].id}
            title={Cards[3].title}
            text={Cards[3].text}
          />
        </div>
      </div>
    </div>
  );
};

export default Properties;

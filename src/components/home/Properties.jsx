import React from 'react';

import '../../static/styles/home/properites.scss';

import { ReactComponent as CreditCard } from '../../static/icons/properties/credit-card.svg';
import { ReactComponent as DeliveryTruck } from '../../static/icons/properties/delivery-truck.svg';
import { ReactComponent as DiscussIssue } from '../../static/icons/properties/discuss-issue.svg';
import { ReactComponent as Hand } from '../../static/icons/properties/hand.svg';

const Properties = () => {
  return (
    <div className='row properties justify-content-center'>
      <div className='propertie col-md-3 row align-items-center'>
        <div className='col-6 p-0 icon'>
          <CreditCard />
        </div>
        <div className='col-6 p-0 text'>
          <h2 className='col-12 p-0 m-0'>پرداخت امن</h2>
          <p className='col-12 p-0 pt-1 m-0'>قابل اعتماد و مطمئن</p>
        </div>
      </div>
      <div className='propertie col-md-3 row align-items-center'>
        <div className='col-5 p-0 icon'>
          <DeliveryTruck />
        </div>
        <div className='col-6 p-0 text'>
          <h2 className='col-12 p-0 m-0'>ارسال رایگان</h2>
          <p className='col-12 p-0 pt-1 m-0'>خرید بالای 100 هزار تومان</p>
        </div>
      </div>
      <div className='propertie col-md-3 row align-items-center'>
        <div className='col-6 p-0 icon'>
          <DiscussIssue />
        </div>
        <div className='col-6 p-0 text'>
          <h2 className='col-12 p-0 m-0'>پشتیبانی</h2>
          <p className='col-12 p-0 pt-1 m-0'>پشتیبانی اختصاصی محصولات</p>
        </div>
      </div>
      <div className='propertie col-md-3 row align-items-center'>
        <div className='col-6 p-0 icon'>
          <Hand />
        </div>
        <div className='col-6 p-0 text'>
          <h2 className='col-12 p-0 m-0'>امکانات</h2>
          <p className='col-12 p-0 pt-1 m-0'>فروشگاهی با انواع کالاها</p>
        </div>
      </div>
    </div>
  );
};

export default Properties;

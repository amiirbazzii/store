import React from 'react';

import Nav from '../components/home/Nav';
import Hero from '../components/home/Hero';
import Properties from '../components/home/Properties';

const home = () => {
  return (
    <div className='home'>
      <Nav />
      <Hero />
      <Properties />
    </div>
  );
};

export default home;

import React from 'react';

import Nav from '../components/home/Nav';
import Hero from '../components/home/Hero';
import Properties from '../components/home/Properties';
import Cards from '../components/home/Cards';

const home = () => {
  return (
    <div className='home'>
      <Nav />
      <Hero />
      <Properties />
      <Cards />
    </div>
  );
};

export default home;

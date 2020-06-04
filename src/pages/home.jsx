import React, { PureComponent } from 'react';

import Nav from '../components/home/Nav';
import Hero from '../components/home/Hero';
import Properties from '../components/home/Properties';
import Cards from '../components/home/Cards';
import Articles from '../components/home/Articles';
import Footer from '../components/home/Footer';

export default class home extends PureComponent {
  render() {
    return (
      <div className='home'>
        <Nav />
        <Hero />
        <Properties />
        <Cards />
        <Articles />
        <Footer />
      </div>
    );
  }
}

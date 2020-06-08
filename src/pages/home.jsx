import React, { PureComponent } from 'react';

import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import Properties from '../components/Home/Properties/Properties';
import Cards from '../components/Home/Cards/Cards';
import Blog from '../components/Home/Blog/Blog';
import Footer from '../components/Footer/Footer';

export default class home extends PureComponent {
  render() {
    return (
      <div className='home'>
        <Nav />
        <Hero />
        <Properties />
        <Cards />
        <Blog />
        <Footer />
      </div>
    );
  }
}

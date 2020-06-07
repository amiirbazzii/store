import React, { PureComponent } from 'react';

<<<<<<< HEAD
import Nav from '../components/Nav/Nav';
import Hero from '../components/Hero/Hero';
import Properties from '../components/Home/Properties/Properties';
import Cards from '../components/Home/Cards/Cards';
import Articles from '../components/Home/Blog/Articles/Articles';
import Footer from '../components/Footer/Footer';
=======
import Nav from '../components/home/Nav';
import Hero from '../components/home/Hero';
import Properties from '../components/home/Properties';
import Cards from '../components/home/Cards';
import Articles from '../components/home/Articles';
import Footer from '../components/home/Footer';
>>>>>>> 35872177436c805bf1b4dd6cd5193f489405a7c7

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

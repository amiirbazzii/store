import React, { Component } from 'react';
import '../../static/styles/home/carousel.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [
        {
          caption: 'معرفی اسپیکر همراه سونی',
          id: 1,
        },
        {
          caption: 'بررسی تخصصی هدفون مایکروسافت',
          id: 2,
        },
        {
          caption: 'معرفی جدیدترین تلویزیون سونی',
          id: 3,
        },
      ],
      imageNumber: 1,
    };
  }

  plusSlides = (e) => {
    let s = this.state.imageNumber;
    s = s + e;
    if (s <= 0) {
      s = this.state.image.length;
    } else if (s > this.state.image.length) {
      s = 1;
    }
    this.setState({
      imageNumber: s,
    });
  };

  render() {
    const captionNum = this.state.imageNumber;

    return (
      <div className='mySlides fade'>
        <img
          className=' img-fluid'
          src={require(`../../static/images/home/card-${this.state.imageNumber}.png`)}
          alt={this.state.caption}
        />
        <button className='prev' onClick={() => this.plusSlides(-1)}>
          &#10094;
        </button>
        <button className='next' onClick={() => this.plusSlides(1)}>
          &#10095;
        </button>
        <div className='slider-text'>
          <h3 className='text'>{this.state.image[captionNum - 1].caption}</h3>
          <a href='/'>ادامه مطلب</a>
        </div>
      </div>
    );
  }
}

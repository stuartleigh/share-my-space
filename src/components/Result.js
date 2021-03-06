import React, { Component } from 'react';

const titles = {
    airbb:'Open your home on Airbnb',
    coworking:'Convert your space a coworking space',
    appearHere:'Open your space to a pop up shop',
}
const images = {
    airbb:'../../assets/images/main.jpg',
    coworking:'../../assets/images/main2.jpg',
    appearHere:'../../assets/images/main3.png'
}
const links = {
    airbb:'https://www.airbnb.co.uk/host',
    coworking:'https://hubblehq.com/host',
    appearHere:'https://www.appearhere.co.uk/landlord-enquiries/new'
}
const paragraphs = {
  airbb: "Make the most of the space you live in, love it, share it and make new friends in the process. AirBandB allows you to fling open your doors and rent out space in your home for different periods of time - be it a night, week or even a bit longer - Problem solved, you’ll be making extra money in no time!",
  coworking: "Working on the move is increasingly popular, with ‘flat white loving’ entrepreneurs (in which we include ourselves) propping up every coffee shop this side of Shoreditch, but sometimes it’s nice to have a home. A co-working environment embraces this agility and allows you to think, create and socialise with like minded companies, under one cost effective roof.",
  appearHere: "There are hundreds of designers and retailers who wish they had a pocket of space where they could show off their product. Pop up shops are surprisingly versatile and almost any blank canvas can be transformed into a retailing haven.",
}
export default class Result extends Component {
  render () {
    const { type, value } = this.props;

    var formatted_value = value.toFixed(0).replace(/(\d+)(\d{3})/, '$1'+','+'$2');

    return (
      <div className="result-container">
        <div className='col-md-6'>
            <img src={images[type]} className='result-image'/>
        </div>
        <div className='col-md-6'>
            <div className='result-title'>{titles[type]}</div>
            <div className='result-paragraph'>{paragraphs[type]}</div>
            <div>
                <div className='result-amount'>£{formatted_value}</div>
                <div className='result-explainer'>estimated monthly revenue</div>
            </div>
            <a href={links[type]}><button className='result-button' type='button'>Show Me How</button></a>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';

const titles = {
    airbb:'Open your home on Airbnb',
    coworking:'Make your home a coworking space',
    appearHere:'Make your home a pop up shop'}
const images = {
    airbb:'../../assets/images/main.jpg',
    coworking:'../../assets/images/main2.jpg',
    appearHere:'../../assets/images/main3.png'
}
const links = {
    airbb:'https://www.airbnb.co.uk/host?from_nav=1&link=1',
    coworking:'https://nomadspace.co.uk/spaces/london-coworking-spaces?gclid=CjwKEAjw1qHABRDU9qaXs4rtiS0SJADNzJisWkZ628iYbLgkGhq2MjbX60l_Z3J4I2XjafIyGWnbpBoCHFnw_wcB',
    appearHere:'../../assets/images/main3.jpg'
}
export default class Result extends Component {
  render () {
    const { type, value } = this.props;

    var formatted_value = value.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');

    return (
      <div className="result-container">
        <div className='col-md-6'>
            <img src={images[type]} className='result-image'/>
        </div>
        <div className='col-md-6'>
            <div className='result-title'>{titles[type]}</div>
            <div className='result-paragraph'>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"}</div>
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

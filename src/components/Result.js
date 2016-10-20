import React, { Component } from 'react';

export default class Result extends Component {
  render () {
    return (
      <div className="result-container">
        <div className='col-md-6'>
            <img src='../../assets/images/main.jpeg' className='result-image'/>
        </div>
        <div className='col-md-6'>
            <div className='result-title'>Open Your Home On Airbnb</div>
            <div className='result-paragraph'>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem"}</div>
            <div>
                <div className='result-amount'>{"£4,504 p/m"}</div>
                <div className='result-explainer'>estimated revenue</div>
            </div>
            <button className='result-button' type='button'>Show Me How</button>
        </div>
      </div>
    );
  }
}

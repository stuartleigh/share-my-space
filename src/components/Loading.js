import React, { Component } from 'react';
import GSAP from 'react-gsap-enhancer'
import { TimelineMax, TweenMax } from 'gsap';

import Spinner from './Spinner'

const TEXTS = [
  "Loading",
  "Catching the hamsters",
  "Fetching the data",
  "Spinning up some servers",
  "Finding our notebooks",
  "Refilling the printer",
]

export class Loading extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: TEXTS[0],
    }
    this.changeText = this.changeText.bind(this);
  }
  componentDidMount () {
    this.addAnimation(({target}) => {
      var text = target.find({name: 'text'})

      return new TimelineMax({repeat: -1})
        .to(text, 1, {x: '0', ease: Power3.easeOut})
        .to(text, 1, {x: '-1200', delay: '2', ease: Power3.easeIn})
        .to(text, 0, {x: '1200'});
    });
  }

  changeText () {
    console.log('changeText');
    const text = TEXTS[Math.floor(Math.random() * TEXTS.length)];
    this.setState({text});
  }

  render () {
    return (
      <div className="loading">
        <div className="loading__inner">
          <Spinner />
          <h1 className="loading__text" name="text">{this.state.text}</h1>
        </div>
      </div>
    );
  }
}

export default GSAP(Loading)

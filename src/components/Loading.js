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

      return new TimelineMax({repeat: -1, onRepeat: this.changeText})
        .from(text, 2, {x: '+=1500'})
        .to(text, 2, {x: '-=1500'});
    });
  }

  changeText () {
    const text = TEXTS[Math.floor(Math.random() * TEXTS.length)];
    this.setState({text});
    console.log('repeating')
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

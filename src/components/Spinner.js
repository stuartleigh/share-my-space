import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="spinner__rect spinner__rect--1"></div>
        <div className="spinner__rect spinner__rect--2"></div>
        <div className="spinner__rect spinner__rect--3"></div>
        <div className="spinner__rect spinner__rect--4"></div>
        <div className="spinner__rect spinner__rect--5"></div>
      </div>
    )
  }
}

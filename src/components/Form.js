import React, { Component } from 'react';
import { connect } from 'react-redux'
import classNames from 'classnames';

import { fetchResults } from '../actions';
import { getRequest } from '../selectors';
import { RequestKeys } from '../constants';

import Loading from './Loading';

export const COMMERCIAL = 'commercial';
export const RESIDENTIAL = 'residential';

export class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      size: '',
      postCode: '',
      spaceType: undefined,
    }
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _toggleSpaceType (spaceType) {
    if (spaceType === this.state.spaceType) {
      this.setState({spaceType: undefined});
    } else {
      this.setState({spaceType});
    }
  }

  _isValid () {
    const { size, postCode, spaceType } = this.state;
    return size !== '' && postCode !== '' && spaceType !== undefined;
  }

  _handleSubmit () {
    console.log('submitting')
    this.props.fetchResults(this.state);
  }

  render () {
    const { spaceType } = this.state;
    const { request } = this.props;
    const valid = this._isValid();
    return (
      <section className="form">
        {request.started ? <Loading /> : null}
        <h2 className="form__text">
          {"I have a "}
          <input className="form__input form__input--size" placeholder="size" onChange={event => this.setState({size: event.target.value})} />
          {" sq. ft. "}
          <span className="form__selector">
            <span className={classNames("form__selector-option", spaceType === COMMERCIAL && "form__selector-option--active", spaceType === RESIDENTIAL && "form__selector-option--disabled")} onClick={() => this._toggleSpaceType(COMMERCIAL)}>commercial</span>
            <span className="form__selector-separator"> or</span>
            <br/>
            <span className={classNames("form__selector-option", spaceType === RESIDENTIAL && "form__selector-option--active", spaceType === COMMERCIAL && "form__selector-option--disabled")} onClick={() => this._toggleSpaceType(RESIDENTIAL)}>residential</span>
          </span>
          {" space in "}
          <input className="form__input form__input--post-code" placeholder="post code" onChange={event => this.setState({postCode: event.target.value})} />
          {"."}
        </h2>
        <button className={classNames("form__button", valid && "form__button--active")} onClick={this._handleSubmit}>What should I do with it?</button>
      </section>
    );
  }
}

export default connect((state) => ({
  request: getRequest(RequestKeys.FETCH_RESULTS)(state),
}), { fetchResults })(Form)

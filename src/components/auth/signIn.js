import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignInForm from './signInForm';
import BlogTitle from '../blogTitle';

class SignIn extends Component {

    onSubmit = (fields) => {
        this.props.signIn(fields);
    }

  render() {
    return (
      <div className='sign-in'>
        <BlogTitle className='sign-in__blog-title' title='Login' />
        <SignInForm onSubmit={this.onSubmit} className='sign-in__form' />
      </div>
    );
  }
}

export default connect(null, actions)(SignIn);
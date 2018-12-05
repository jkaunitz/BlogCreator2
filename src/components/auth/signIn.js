import React, { Component } from 'react';

import SignInForm from './signInForm';
import BlogTitle from '../blogTitle';

class SignIn extends Component {

    onSubmit = (fields) => {
        console.log(fields);
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

export default SignIn;
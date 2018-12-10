import React, { Component } from 'react';

import SignUpForm from './signUpForm';
import BlogTitle from '../blogTitle';

class SignUp extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

  render() {
    return (
      <div className='sign-up'>
        <BlogTitle className='sign-up__blog-title' title='Create Account' />
        <SignUpForm className='sign-up__form' />
      </div>
    );
  }
}

export default SignUp;
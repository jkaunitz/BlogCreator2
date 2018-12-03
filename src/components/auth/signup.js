import React, { Component } from 'react';

import SignUpForm from './signupForm';

class SignUp extends Component {
  render() {
    return (
      <div className='sign-up'>
        <SignUpForm className='sign-up__form' />
      </div>
    );
  }
}

export default SignUp;
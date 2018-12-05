import React, { Component } from 'react';

import SignUpForm from './signUpForm';

class SignUp extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

  render() {
    return (
      <div className='sign-up'>
        <SignUpForm className='sign-up__form' />
      </div>
    );
  }
}

export default SignUp;
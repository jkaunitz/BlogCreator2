import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

class SignUp extends Component {
  render() {
    return (
      <div className='sign-up'>
        sign up
      </div>
    );
  }
}

SignUp = reduxForm({
    form: 'SignUp'
})(SignUp);

export default SignUp;
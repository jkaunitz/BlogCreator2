import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

class SignUpForm extends Component {
  render() {
      const { className } = this.props;
        return (
        <form className={`${className} sign-up-form`}>
            sign up
        </form>
    );
  }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;
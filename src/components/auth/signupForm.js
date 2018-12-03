import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SignUpForm extends Component {
  render() {
      const { className } = this.props;
        return (
        <form className={`${className} sign-up-form`}>
            <Field className='sign-up-form__name'
            type='name'
            title='Name'
            placeholder='Enter Name'
            name='name'
            component={FormInput}/>
            <Field className='sign-up-form__email'
            type='email'
            title='Email'
            placeholder='Enter Email'
            name='email'
            component={FormInput}/>
            <Field className='sign-up-form__password'
            type='password'
            title='Password'
            placeholder='Enter Password'
            name='password'
            component={FormInput}/>
            <Field className='sign-up-form__createaccount'
            onClick={() => console.log('try to submit')}
            type='submit'
            title='Create Account'
            name='createaccount'
            component={FormButton}/>
        </form>
    );
  }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;
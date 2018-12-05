import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import ForgotSomething from '../forgotSomething';

import history from '../../history';

class SignInForm extends Component {
  render() {
      const { className, handleSubmit } = this.props;
      const links = [
        {
              _id: 0,
              title: 'Not a user? Please register to sign up',
              onClick: () => history.push('/signup')
        },
        {
              _id: 1,
              title: 'Forgot email?',
              onClick: () => history.push('/forgotEmail')
        },
        {
              _id: 2,
              title: 'Forgot password?',
              onClick: () => history.push('/forgotPassword')
        } 
      ]
        return (
        <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
            <Field className='sign-in-form__email'
            type='email'
            title='Email'
            placeholder='Enter Email'
            name='email'
            component={FormInput}/>
            <Field className='sign-in-form__password'
            type='password'
            title='Password'
            placeholder='Enter Password'
            name='password'
            component={FormInput}/>
            <Field className='sign-in-form__login'
            onClick={() => console.log('try to submit')}
            type='submit'
            title='Login'
            name='login'
            component={FormButton}/>
            <ForgotSomething className='sign-in-form__forgotsomething' links={links}/>
        </form>
    );
  }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;
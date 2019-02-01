import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
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
              onClick: () => history.push('/signUp')
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
        <form onSubmit={handleSubmit} className='sign-in-form'>
            <FormTitle className='sign-in-form__title' text='Login' />
            <Field 
              className='sign-in-form__email'
              type='email'
              title='Email'
              placeholder='Enter Email'
              name='email'
              component={FormInput}/>
            <Field 
              className='sign-in-form__password'
              type='password'
              title='Password'
              placeholder='Enter Password'
              name='password'
              component={FormInput}/>
            <Field 
              className='sign-in-form__login'
              onClick={() => history.push('/blog/new')}
              type='submit'
              title='Login'
              name='login'
              component={FormButton}/>
            <ForgotSomething 
              className='sign-in-form__forgot-something' 
              title='Forgot something' links={links}/>
        </form>
    );
  }
}

SignInForm = reduxForm({
    form: 'signin'
})(SignInForm);

export default SignInForm;
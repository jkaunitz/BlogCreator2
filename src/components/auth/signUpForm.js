import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import ForgotSomething from '../forgotSomething';

import history from '../../history';

class SignUpForm extends Component {
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
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
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
                <Field className='sign-up-form__create-account'
                onClick={() => console.log('try to submit')}
                type='submit'
                title='Create Account'
                name='create-account'
                component={FormButton}/>
                <ForgotSomething className='sign-up-form__details' title='Forgot Something' links={links}/>
            </form>
    );
  }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;
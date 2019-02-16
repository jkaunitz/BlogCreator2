import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import ForgotSomething from '../forgotSomething';

import history from '../../history';

class SignUpForm extends Component {
  render() {
      const { className, handleSubmit } = this.props;
      const passwordCriteria = [
        {
              _id: 0,
              title: 'Need both lowercase and uppercase',
        },
        {
              _id: 1,
              title: 'Need at least a number',
        },
        {
              _id: 2,
              title: 'Needs at least a character (e.g. @, $, %, #, etc.)'
        } 
      ]
        return (
            <form onSubmit={handleSubmit} className='sign-up-form'>
                <FormTitle className='sign-up-form__title' text='New User' />
                <Field 
                  className='sign-up-form__name'
                  type='name'
                  title='Name'
                  placeholder='Enter Name'
                  name='name'
                  component={FormInput}/>
                <Field 
                  className='sign-up-form__email'
                  type='email'
                  title='Email'
                  placeholder='Enter Email'
                  name='email'
                  component={FormInput}/>
                <Field 
                  className='sign-up-form__password'
                  type='password'
                  title='Password'
                  placeholder='Enter Password'
                  name='password'
                  component={FormInput}/>
                <Field 
                  className='sign-up-form__create-account'
                  type='submit'
                  title='Create Account'
                  name='create-account'
                  component={FormButton}/>
                <ForgotSomething 
                  className='sign-up-form__forgot-something' 
                  title='Requirements for the following' 
                passwordCriteria={passwordCriteria}/>
            </form>
    );
  }
}

SignUpForm = reduxForm({
    form: 'signup'
})(SignUpForm);

export default SignUpForm;
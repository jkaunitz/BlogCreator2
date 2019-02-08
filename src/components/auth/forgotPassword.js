import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';

class ForgotPassword extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        const { className, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit} className='forgot-password'>
                <Field className='forgot-password__password'
                type='password'
                title='Password'
                placeholder='Enter Password'
                name='password'
                component={FormInput}/>
                <Field className='forgot-password__submit-password'
                onClick={() => history.push('/signIn')}
                type='submit'
                title='Submit Password'
                name='submit-password'
                component={FormButton}/>
            </form>
        );
    }
}

ForgotPassword = reduxForm({
    form: 'ForgotPassword'
})(ForgotPassword);

export default ForgotPassword;
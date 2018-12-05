import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

import history from '../../history';

class ForgotEmail extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        const { className, handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit} className={`${className} forgot-email`}>
                <Field className='forgot-email__email'
                type='email'
                title='Email'
                placeholder='Enter Email'
                name='email'
                component={FormInput}/>
                <Field className='forgot-email__submit-email'
                onClick={() => history.push('/signIn')}
                type='submit'
                title='Submit Email'
                name='submit-email'
                component={FormButton}/>
            </form>
        );
    }
}

ForgotEmail = reduxForm({
    form: 'ForgotEmail'
})(ForgotEmail);

export default ForgotEmail;
import React, { Component } from 'react';

class ForgotPassword extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return(
            <form onSubmit={handleSubmit} className={`${className} forgot-password`}>
                <Field className='sign-in-form__password'
                type='password'
                title='Password'
                placeholder='Enter Password'
                name='password'
                component={FormInput}/>
            </form>
        );
    }
}

export default ForgotPassword;
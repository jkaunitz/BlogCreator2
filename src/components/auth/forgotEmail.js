import React, { Component } from 'react';

class ForgotEmail extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return(
            <form onSubmit={handleSubmit} className={`${className} forgot-email`}>
                <Field className='sign-in-form__email'
                type='email'
                title='Email'
                placeholder='Enter Email'
                name='email'
                component={FormInput}/>
            </form>
        );
    }
}

export default ForgotEmail;
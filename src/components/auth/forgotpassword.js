import React, { Component } from 'react';

class ForgotPassword extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return(
            <div className='forgot-password'>
            </div>
        );
    }
}

export default ForgotPassword;
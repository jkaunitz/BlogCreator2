import React, { Component } from 'react';

class ForgotEmail extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return(
            <div className='forgot-email'>
            </div>
        );
    }
}

export default ForgotEmail;
import React, { Component } from 'react';

// import SignInForm from '../auth/signInForm';

class NewBlog extends Component {
    
    onSubmit = (fields) => {
        console.log('trying to submit');
    }

    render() {
        return (
            <div className='new-blog'>
                {/* <SignInForm onSubmit={(event) => this.onSubmit(event)}/> */}
            </div>
        )
    }
}

export default NewBlog;
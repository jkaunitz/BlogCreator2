import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignUpForm from './signUpForm';

class SignUp extends Component {

    onSubmit = (fields) => {
      this.props.signUp(fields, () => {
        console.log('testing');
        this.props.history.push('/blog');
      })
    }

  render() {
    return (
      <div className='sign-up'>
        <SignUpForm onSubmit={(event) => this.onSubmit(event)} />
      </div>
    );
  }
}

export default connect(null, actions)(SignUp);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignUpForm from './signUpForm';

class SignUp extends Component {

    componentDidMount() {
      this.props.updateHeader(false);
    }

    onSubmit = (fields) => {
      this.props.signUp(fields, () => {
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
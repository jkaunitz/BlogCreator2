import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignInForm from './signInForm';

class SignIn extends Component {

    componentDidMount() {
      this.props.updateHeader(false);
    }

    onSubmit = (fields) => {
        this.props.signIn(fields, () => {
          this.props.history.push('/blog/new');
        });
    }

  render() {
    return (
      <div className='sign-in'>
        <SignInForm onSubmit={(event) => this.onSubmit(event)} />
      </div>
    );
  }
}

export default connect(null, actions)(SignIn);
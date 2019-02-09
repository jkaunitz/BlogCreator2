import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import SignUpForm from './signUpForm';

class SignUp extends Component {

//   signUp(fields, success) {
//     return function(dispatch) {
//         axios.post(`${ROOT_URL}/signUp`, fields)
//             .then(response => {
//                 const {token } = response.data;
//                 localStorage.setItem('token', token);
//                 dispatch({
//                     type: AUTHENTICATE_USER,
//                     payload: response.data
//                 })
//                 success();
//             })
//             .catch(err => {
//                 if(err) { console.log(err) }
//             })
//     }
// }
    componentDidMount() {
      this.props.updateHeader(false);
    }

    onSubmit = (fields) => {
      this.signUp(fields, () => {
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
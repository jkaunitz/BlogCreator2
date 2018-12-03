import React, { Component } from 'react';

import Header from './header';
import Bar from './bar';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <Bar/>
      </div>
    );
  }
}

export default Layout;
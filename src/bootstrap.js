import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import './style/main.scss';

import history from './history';

import Layout from './components/layout';

// AUTH
import requireAuth from './components/requireAuth';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import ForgotEmail from './components/auth/forgotEmail';
import ForgotPassword from './components/auth/forgotPassword';

// BLOG
import NewBlog from './components/blog/newBlog';
import EditBlog from './components/blog/editBlog';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signIn' exact component={SignIn}/>
            <Route path='/signUp' exact component={SignUp}/>
            <Route path='/forgotEmail' exact component={ForgotEmail}/>
            <Route path='/forgotPassword' exact component={ForgotPassword}/>
            <Route path='/blog/new' component={requireAuth(NewBlog)}/>
            <Route path='/blog/edit/:id' component={requireAuth(EditBlog)}/>
          </Switch>
        </Layout>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);

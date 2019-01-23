import React, { Component } from 'react';

import Button from '../button';

import history from '../../history';

import { ROOT_URL } from '../../config';

import RequireAdmin from '../auth/requireAdmin';

class LatestBlog extends Component {

    handleEdit = () => {
        history.push('/blog/edit/$(this.props._id');
    }

    render() {
        const { title, body } = this.props;
        return (
            <div className='latest-blog'>
                <h1 className='latest-blog__title'>{title}</h1>
                <RequireAdmin>
                    <Button className='latest-blog__button' callback={() => this.handleEdit()} icon='fas fa-pencil-alt'/>
                </RequireAdmin>
                <div class='latest-blog__body'>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}

export default LatestBlog;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewBlogForm from './newBlogForm';

class NewBlog extends Component {
    
    onSubmit = (fields) => {
        const { title, body} = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        // formData.append('image', image);

        this.props.createNewBlog(formData, () => {
            this.props.history.push('/blog');
        })
    };

    onCancel = (fields) => {
        this.props.history.push('/blog');
    }

    render() {
        return (
            <div className='new-blog'>
                <NewBlogForm
                    onCancel={() => this.onCancel()}
                    onSubmit={(event) => this.onSubmit(event)}
                    titlePlaceholder = 'Type in Blog Title here'
                    titleTitle = 'Blog Title'
                    bodyPlaceholder = 'Type in Blog here'
                    bodyTitle = 'Body'
                />
            </div>
        );
    }
}

NewBlog = connect(null, actions)(NewBlog);

export default NewBlog;
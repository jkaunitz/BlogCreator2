import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import EditBlogForm from './editBlogForm';

class EditBlog extends Component {

    onSubmit = (fields) => {
        const { title, body, image } = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);

        this.props.editBlog(this.componentWillMount.match.params.id, fromData, () => {
            this.props.history.push('/blog');
        })
    };

    onCancel = () => {
        this.props.history.push('/blog');
    };

    render() {
        return(
            <div className='new-blog'>
            
            </div>
        )
    }
}

export default connect(null, actions)(EditBlog);
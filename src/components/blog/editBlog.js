import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewBlogForm from './newBlogForm';

class EditBlog extends Component {

    onSubmit = (fields) => {
        const { title, body } = fields;

        var formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        // formData.append('image', image);

        this.props.editBlog(this.componentWillMount.match.params.id, fromData, () => {
            this.props.history.push('/blog');
        })
    };

    onCancel = () => {
        this.props.history.push('/blog');
    };

    componentDidMount() {
        this.props.fetchBlogWithId(this.props.match.params.id)
    }

    render() {
        return(
            <div className='new-blog'>
                <NewBlogForm
                    blogToEdit={this.props.blogToEdit}
                    onCancel={() => this.onCancel()}
                    onSubmit={(event) => this.onSubmit(event)}
                    formTitle='Edit Blog'
                    titleTitle='Blog Title'
                    bodyTitle='Body'
                />
            </div>
        )
    }
}

export default connect(null, actions)(EditBlog);
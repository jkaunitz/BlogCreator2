import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class NewBlogForm extends Component {
    render() {
        const { handleSubmit, formTitle, blogToEdit } = this.props;
        const {

        } = this.props;

        return (
            
        );
    }
}

NewBlogForm = reduxForm({
    form: 'newblog'
})(NewBlogForm);

export default NewBlogForm;
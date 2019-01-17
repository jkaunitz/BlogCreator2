import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class NewBlogForm extends Component {
    render() {
        const { handleSubmit, formTitle, blogToEdit } = this.props;
        const {
            titlePlaceholder, titleTitle,
            bodyPlaceholder, bodyTitle
        } = this.props;

        return (
            <form onSubmit={handleSubmit} className='new-blog-form'>
            <Field
                className='new-blog-form__blog-title'
                placeholder={titlePlaceholder}
                name='title'
                type='text'
                title={titleTitle}
                component={FormInput}
            />
            <Field
                className='new-blog-form__body'
                placeholder={bodyPlaceholder}
                name='body'
                type='text'
                title={blogTitle}
                component={FormTextArea}
            />
            <Field
                className='new-blog-form__submit'
                name='submit'
                type='submit'
                title='Submit'
                component={FormButton}
            />
            <Field
                className='new-blog-form__cancel'
                name='cancel'
                type='button'
                title='Cancel'
                component={FormButton}
                onClick={this.props.onCancel}
            />
            <Field
                className='new-blog-form__image'
                name='image'
                type='file'
                title='Image'
                component={FormImage}
            />
            </form>
        );
    }
}

NewBlogForm = reduxForm({
    form: 'newblog'
})(NewBlogForm);

export default NewBlogForm;
import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea } from '../formFields';

class EditBlogForm extends Component {
    render() {
        const { handleSubmit, formTitle } = this.props;
        const {
            titlePlaceholder, titleTitle,
            bodyPlaceholder, bodyTitle
        } = this.props;

        return (
            <form onSubmit={handleSubmit} className='new-blog-form'>
                <FormTitle className='new-blog-form__title' text={formTitle} />
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
                    title={bodyTitle}
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
                    component={FormInput}
                    onClick={this.props.onCancel}
                />
            </form>
        )
    }
}

NewBlogForm = reduxForm({
    form: 'editblog',
    enableReinitialize: true
})(EditBlogForm);

function mapStateToProps(state) {
    const { blogToEdit } = state.blogs;
    return {
        initialValues: blogToEdit
    }
}

EditBlogForm = connect(mapStateToProps)(EditBlogForm);

export default EditBlogForm;
import React, { Component } from 'react';

class BlogTitle extends Component {
    render() {
        const { className, title } = this.props;
        return (
            <div className={`${className} blog-title`}>{title}</div>
        )
    }
}

export default BlogTitle;
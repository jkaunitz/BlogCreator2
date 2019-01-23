import React, { Component } from 'react';

import { connect } from 'react-redux';

import history from '../../history';

function ArchiveItem({title, date, _id, callback}) {
    const parsedDate = new Date(date);
    return (
        <div className='archive-item archive-items__item'>
            <a onClick={() => callback(_id)}className='archive-item__title'>{title}</a>
            <div className='archive-item__date'>
                { parsedDate.getMonth() + 1 }
                /
                { parsedDate.getDate() }
                /
                { parsedDate.getFullYear() - 2000 }
            </div>
        </div>
    )
}

class ArchiveBlog extends Component {
    render() {
        return(
            <div className='archive-blog'>
                <div className='archive-blog__title'>Archive</div>
                <div className='archive-blog__items archive-items'>
                    {
                        this.props.blogs/map(blog => {
                            return <ArchiveItem callback={(_id) => history.push(`/blog/archive/${_id}`)} key={blog._id} {...blog}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { blogs } = state.blogs;
    return {
        blogs
    }
}

export default connect(mapStateToProps)(ArchiveBlog);
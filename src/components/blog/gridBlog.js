import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import ArchiveBlog from './archiveBlog';
import LatestBlog from './latestBlog';
import Button from '../button';

import RequireAdmin from '../auth/requireAdmin';

class BlogGrid extends Component {

    handleAddBlog = () => {
        this.props.history.push('/blog/new');
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.fetchBlogs();
        }, 1000);
    }

    render() {
        return (
            <div className='grid-blog'>
                <RequireAdmin>
                    <Button className='grid-blog__button' icon='fas fa-plus' callback={() => this.handleAddBlog()}/>
                </RequireAdmin>
                <ArchiveBlog/>
                <LatestBlog {...this.props.latestBlog}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { blogs } = state.blogs;
    const latestBlog = blogs[0];
    return {
        latestBlog
    }
}
export default connect(mapStateToProps, actions)(BlogGrid);
import React, { Component } from 'react';

class ForgotSomething extends Component {
    render() {
        const { className, links } = this.props;
        return (
            <div className={`${className} forgot-something`}>
                <div className='forgot-something__links'>
                    {
                        links.map(link => {
                            return <a key={link._id} onClick={link.onClick} className='forgot-something__link'>{link}</a>
                        })
                    }
                </div>
            </div>
        )
    }    
}

export default ForgotSomething;
import React, { Component } from 'react';

class ForgotSomething extends Component {
    render() {
        const { title, className, links } = this.props;
        return (
            <div className='forgot-something'>
                <div className={`${className} forgot-something__title`}>{title}</div>
                    <div className='forgot-something__links'>
                        {
                            links.map(link => {
                                return <a key={link._id} onClick={link.onClick} className='forgot-something__link'>{link.title}</a>
                            })
                        }
                </div>
            </div>
        )
    }    
}

export default ForgotSomething;
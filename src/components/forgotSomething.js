import React, { Component } from 'react';

class ForgotSomething extends Component {

    renderChildren = () => {
        const { links, passwordCriteria } = this.props;
        let children = [];
        if(links) {
            children = links.map(link => {
                return <a key={link._id} onClick={link.onClick} className='forgot-password__link'>{link.title}</a>
            })
        } else if(passwordCriteria) {
            children = passwordCriteria.map(item => {
                return <div key={item._id} className='forgot-something__item'>{item.title}</div>
            })
        }
        return children;
    }

    render() {
        const { title, className } = this.props;
        return (
            <div className={`${className} forgot-something`}>
                <div className={`${className} forgot-something__title`}>{title}</div>
                    <div className='forgot-something__links'>
                        {
                            this.renderChildren()
                        }
                </div>
            </div>
        )
    }    
}

export default ForgotSomething;
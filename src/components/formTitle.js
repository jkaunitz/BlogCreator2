import React from 'react';

export function FormTitle(props) {
    const { className, text } = props;
    return (
        <div className={`${className} form-title`}>{text}</div>
    )
}
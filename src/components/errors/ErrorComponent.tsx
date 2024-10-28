import React from 'react';
import "./errorComponent.scss"

interface ErrorComponentProps {
    title: string;
    message: string;
    imgSrc?: string;
}

const ErrorComponent = ({title, message, imgSrc}: ErrorComponentProps) => {
    return (
        <div className="error-wrapper">
            <div className="error-title">{title}</div>
            <div className="error-message">{message}</div>
            {imgSrc && <img className="error-img" src={imgSrc} alt="sad rabbit"/>}
        </div>
    )
}


export default ErrorComponent;
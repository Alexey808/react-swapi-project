import React from 'react';
import './error-indicator.css';
import icon from './warning.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error-icon"/>
            <span>Error! Something has gone terribly wrong (but we alredy sent droids to fix it)</span>
        </div>
    );
}

export default ErrorIndicator;
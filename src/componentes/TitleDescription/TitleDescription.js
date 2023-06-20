import React from 'react';
import './TitleDescription.css';

const TitleDescription = ({ title, description }) => {
    return (
        <div className="title-description">
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
};

export default TitleDescription;

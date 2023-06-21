import React from 'react';
import './MainSection.css';

const MainSection = ({ children }) => {

    return (
        <div className="main-section">
            {children}
        </div>
    );
};

export default MainSection;

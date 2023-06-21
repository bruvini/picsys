import React from 'react';
import './Banner.css';

const Banner = ({image}) => {  // adicione a propriedade image aqui
    return (
        <div className="banner">
            <img src={image} alt="Banner" />
        </div>
    );
};

export default Banner;
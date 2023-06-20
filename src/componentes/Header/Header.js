import React from 'react';
import './Header.css';
import logo from '../../assets/so_logo.png';
import usuario from '../../assets/usuario.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/auriculoterapia">Auriculoterapia</a></li>
                    <li><a href="/acupuntura">Acupuntura</a></li>
                    <li><a href="/fitoterapia">Fitoterapia</a></li>
                    <li><a href="/aromaterapia">Aromaterapia</a></li>
                    <li><a href="/florais">Florais de Bach</a></li>
                    <li><a href="/pacientes">Pacientes</a></li>
                </ul>
            </nav>
            <div className="perfil">
                <a href="/perfil">
                    <img src={usuario} alt="User" />
                </a>
            </div>

        </header>
    );
};

export default Header;

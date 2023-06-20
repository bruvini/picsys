import React from 'react';
import './Footer.css';
import logo from '../../assets/so_logo.png';
import facebookIcon from '../../assets/facebook.png'; // Substitua pelo caminho correto
import instagramIcon from '../../assets/instagram.png'; // Substitua pelo caminho correto

const Footer = () => {
    const pages = ['Sobre Nós', 'Contato', 'Saiba Mais']; // Substitua por suas páginas reais

    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <div className="footer-divider"></div>
                <div className="footer-links">
                    <h3>Links Úteis</h3>
                    {pages.map((page, index) => (
                        <a key={index} href={`#${page.toLowerCase()}`}>{page}</a>
                    ))}
                </div>
                <div className="footer-divider"></div>
                <div className="footer-social">
                    <a href="#facebook"><img src={facebookIcon} alt="Facebook" className="social-icon" /></a>
                    <a href="#instagram"><img src={instagramIcon} alt="Instagram" className="social-icon" /></a>
                </div>
            </div>
            <div className="footer-middle">
                <p>© 2023 Enf. Bruno Vinícius. Todos os direitos reservados.</p>
            </div>
            <div className="footer-bottom">
                <a href="#privacy">Política de Privacidade</a> | <a href="#terms">Termos de Uso</a>
            </div>
        </footer>
    );
};

export default Footer;

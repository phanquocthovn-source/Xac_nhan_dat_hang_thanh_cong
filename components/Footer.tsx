import React from 'react';

const MidasLogo = () => (
    <svg 
        className="footer__logo" 
        viewBox="0 0 240 40" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-label="Nội thất Midas Logo"
    >
        <text 
            x="50%" 
            y="50%" 
            dominantBaseline="middle" 
            textAnchor="middle" 
            fontFamily="Playfair Display, serif" 
            fontSize="30" 
            fontWeight="700"
            fill="var(--text-primary)"
        >
            Nội thất Midas
        </text>
    </svg>
);


const Footer = () => {
    return (
        <footer className="section section--footer footer">
            <div className="container">
                <MidasLogo />
                <p className="footer__copyright">
                    © 2024 Nội thất Midas. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

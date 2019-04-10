import React from 'react';

import "../../components/navbar/navbar.css"
import logo from '../../common/img/we-wish-logo.svg';

function Navbar() {
    return(
        <header className="header">
            <div className=" flexbox wrapper">
                <div className="header__image">
                    <img src={logo} alt="Logo do WeWish!" />
                </div>
                <nav className="header__navbar">
                    <ul className="header__list">
                        <li className="header__list-item"><a href="">Cadastrar</a></li>
                        <li className="header__list-item"><a href="">Entrar</a></li>
                    </ul>
                </nav>
            </div>
        </header>

    );
}

export default Navbar;

import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

import { Link } from 'react-router-dom'

import './MainMenu.scss';


function MainMenu() {
    const [visible, setVisible] = useState(false);

    const Menu = () => (
        <div className="NavMenu" id="menu-hidde">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
            </ul>
        </div>
    )

    return (
        <nav>
            <div className="MainMenu">
                <div className="MainMenuLeft">
                    <img src={require('../../static/logoMenu.svg').default} alt='Devuei Logo Menu' />
                </div>
                <div className="MainMenuRight">
                    <div onClick={() => setVisible(!visible)}
                        className="menu-trigger" id="menu-trigger">
                        <Hamburger size={30} />
                    </div>
                </div>
                {visible ? <Menu /> : null}
            </div>
        </nav>
    );
}

export default MainMenu;
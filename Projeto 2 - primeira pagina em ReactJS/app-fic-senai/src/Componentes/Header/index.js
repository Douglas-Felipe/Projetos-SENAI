import Reacr from 'react';
import logoSENAI from './img/logo-senai2.png';
import './style.css';

function Header(){
    return(
        <header>
            <img src={logoSENAI} />
            <p>SENAI suiço brasileira</p>
        </header>
    );
}
export default Header;
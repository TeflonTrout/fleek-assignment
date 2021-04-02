import React from 'react';
import '../index.css';
import RMLogo from '../images/Rick_and_Morty.svg';
import Portal from '../images/portal.png';


const Header = (props) => {
    return (
        <div className='header'>
            <img
                style={{
                    maxWidth: '300px',
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center'
                }} 
                src={RMLogo} 
                alt="LogoHere"/>
            <img
                style={{
                    maxWidth: '150px',
                    zIndex: '-1',
                    animation: "spin 10s linear infinite"}}
                    src={Portal} 
                    alt="PortalHere"/>
        </div>
    )
}

export default Header

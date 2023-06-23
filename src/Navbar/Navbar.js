import React from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import Profilemenu from "./Profilemenu";
import Mobilesearch from '../Mobile/Mobilesearch';
import logo from "./logo.png";



const Navbar = () => {
    return (
        <div>
            <div className='navbar-container'>
                <div className='image'>
                    <img src={logo} alt="airbnb" />
                </div>
                <div className='middle'>
                    <div className='right'>Anywhere</div>
                    <div className='right'>Any Week</div>
                    <div classname='search-bar'><input className='search-bar-input' type="text" placeholder='Add guests' /></div>
                    <div className='search'><SearchIcon /></div>
                </div>
                <div className='last'>
                    <div style={{ fontSize: "0.99rem" }}>Airbnb your home</div>
                    <LanguageIcon />
                    <Profilemenu />
                </div>
                <Mobilesearch className='mobilesearch' />
            </div>
        </div>
    )

}

export default Navbar;
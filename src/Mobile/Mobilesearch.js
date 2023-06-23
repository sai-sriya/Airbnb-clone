import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Mobile.css";


const Mobilesearch = () => {
    return (
        <div className='mobile-search-bar'>
            <SearchIcon className='mobile-search-icon' />
            <input type="text" placeholder='search here' className='search-mobile-input' />
        </div>
    )
}

export default Mobilesearch;
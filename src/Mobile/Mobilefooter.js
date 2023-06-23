import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import "./Mobile.css";

export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    return (
        <div className='bottom-nav'>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteBorderIcon />} />
                <BottomNavigationAction label="Nearby" icon={<PersonIcon />} />
            </BottomNavigation>
        </div>
    );
}
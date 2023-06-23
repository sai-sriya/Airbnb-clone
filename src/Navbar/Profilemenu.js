import { React, useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import "./Navbar.css";
import Login from '../Menu/Login';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);

    };

    // Dialogue Box State
    const [openDialogue, setOpenDialogue] = useState(false);

    const handleClickOpenDialogue = () => {
        setOpenDialogue(true);
    };

    const handleCloseDialogue = () => {
        setOpenDialogue(false);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='profile-icons'
            >
                <MenuIcon />
                <AccountCircleIcon />

            </Button>
            <Menu
                id="basic-menu"
                className='menu-options'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{ ".MuiPaper-root": { borderRadius: "1rem" } }}
            >
                <MenuItem onClick={handleClickOpenDialogue} className='text-menu'>Sign up</MenuItem>
                <MenuItem onClick={handleClickOpenDialogue} className='text-menu'>Login</MenuItem>
                <hr />
                <MenuItem onClick={handleClose} className='text-menu'>Airbnb your home</MenuItem>
                <MenuItem onClick={handleClose} className='text-menu'>Help</MenuItem>
            </Menu>

            {/* Code for Dialoge Box */}
            <Dialog
                open={openDialogue}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className='dialogtitle'>{"Login in or Sign up"}</DialogTitle>
                <DialogContent>
                    <Login />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogue}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
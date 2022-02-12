import React from 'react';
import {Box, AppBar, Toolbar, IconButton, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";

export const Header = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div" className={'goHome'}>
                        <NavLink to={'/'}>
                            Github Dashboard Sample
                        </NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
};

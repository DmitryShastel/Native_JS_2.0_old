import React, {useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import {Drawer, List} from "@mui/material";

export const Header = () => {

    // Состояние для открытия/закрытия бокового меню
    const [open, setOpen] = useState(false)

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const styles = {
        iconButton: {
            marginLeft: '1%',
            marginRight: '80%'
        },
        list: {
            width: 250,
        }
    }


    return (
        <div>
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" style={styles.iconButton} onClick={handleDrawerOpen}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="black">Pre-junior</Typography>
                </Toolbar>
            </AppBar>

            <Drawer anchor='left' open={open} onClose={handleDrawerClose}>

                <div style={styles.list} role='presentation' onClick={handleDrawerClose} onKeyDown={handleDrawerClose}>
                    <List>

                    </List>
                </div>

            </Drawer>

        </div>
    );
};
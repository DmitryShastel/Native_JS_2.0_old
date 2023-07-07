import React, {useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import {Drawer, List, ListItem, ListItemText} from "@mui/material";
import CloseIcon from '@material-ui/icons/Close';
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Pages/Pages.module.css'


export const Header = () => {

    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('Menu')

    const handleDrawerClose = () => {
        setOpen(false)
    }
    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleClick = (title: string) => {
        setTitle(title);
        //handleDrawerClose();
    }

    const styles = {
        iconButton: {
            margin: '0 80% 0 1%',
        },
        list: {
            width: 250,
            paddingTop: 25,
            paddingLeft: 25,
            marginBottom: 2,
            color: 'black',
        },

        closeButton: {
            position: 'absolute' as const,
            top: '1%',
            right: '1%',
        },

        firstListItem: {
            color: 'blue',
            borderBottom: '1px solid #ADD8E6',
            cursor: 'context-menu',
        },
        menuItem: {
            width: 'fit-content',
            alignSelf: 'flex-start',
        },
        listItem: {
            cursor: 'pointer',
            color: 'black',
            '&:active': {
                color: '#ADD8E6',
            },
            '&:hover': {
                color: '#ADD8E6',
            },
        },
        activeLink: {
            color: '#ADD8E6',
        },
    }



    return (
        <div>
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" style={styles.iconButton}
                                onClick={handleDrawerOpen}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="black">{title}</Typography>
                </Toolbar>
            </AppBar>

            <Drawer anchor='left' open={open} onClose={handleDrawerClose}>

                <div>

                    <IconButton style={styles.closeButton} onClick={handleDrawerClose} onKeyDown={handleDrawerClose}>
                        <CloseIcon/>
                    </IconButton>

                    <div style={styles.list} role='presentation'
                         onKeyDown={handleDrawerClose}>
                        <List >
                            <ListItem style={styles.menuItem}>
                                <ListItemText sx={styles.firstListItem} primary='Menu'/>
                            </ListItem>


                            <ListItem >
                                <NavLink className={s.listItem} to={PATH.PRE_JUNIOR}
                                         onClick={() => handleClick('Pre-junior')}>
                                    <ListItemText primary='Pre-junior'/>
                                </NavLink>
                            </ListItem>

                            <ListItem >
                                <NavLink className={s.listItem} to={PATH.JUNIOR}
                                         onClick={() => handleClick('Junior')}>
                                    <ListItemText primary='Junior'/>
                                </NavLink>
                            </ListItem>

                            <ListItem >
                                <NavLink className={s.listItem} to={PATH.JUNIOR_PLUS}
                                         onClick={() => handleClick('Junior PLUS')}>
                                    <ListItemText primary='Junior PLUS'/>
                                </NavLink>
                            </ListItem>

                        </List>
                    </div>
                </div>
            </Drawer>

        </div>
    );
};
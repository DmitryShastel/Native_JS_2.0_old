import React, {useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import {Drawer, List, ListItem, ListItemText} from "@mui/material";
import CloseIcon from '@material-ui/icons/Close';

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
            margin: '0 80% 0 1%',
        },
        list: {
            width: 250,
            paddingTop: 35,
            paddingLeft: 25,
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
            cursor: 'pointer',
        },
        prentItem: {
            width: 'fit-content',
            alignSelf: 'flex-start',
        },
        listItem: {
            cursor: 'pointer',
            '&:active': {
                color: '#ADD8E6',
            },
        }
    }


    return (
        <div>
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" style={styles.iconButton}
                                onClick={handleDrawerOpen}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="black">Pre-junior</Typography>
                </Toolbar>
            </AppBar>

            <Drawer anchor='left' open={open} onClose={handleDrawerClose}>

                <div>

                    <IconButton style={styles.closeButton} onClick={handleDrawerClose} onKeyDown={handleDrawerClose}>
                        <CloseIcon/>
                    </IconButton>

                    <div style={styles.list} role='presentation'
                         onKeyDown={handleDrawerClose}>
                        <List>
                            <ListItem sx={styles.prentItem}>
                                <ListItemText sx={styles.firstListItem} primary='Pre-junior'/>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText primary='Junior'/>
                            </ListItem>
                            <ListItem sx={styles.listItem}>
                                <ListItemText primary='Junior PLUS'/>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Drawer>

        </div>
    );
};
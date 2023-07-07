import React, {useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => {

    const [open, setOpen] = useState(false)

    const styles = {
        iconButton: {
            marginLeft: '1%',
            marginRight: '80%'
        }
    }


    return (
        <div>
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar >
                    <IconButton edge="start" color="inherit"  aria-label="menu" style={styles.iconButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="black">Pre-junior</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};
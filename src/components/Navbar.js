import React, { useState } from 'react';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Whatsapp from '@material-ui/icons/WhatsApp';


import {
    BottomNavigationAction,
    Grid,
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Box,
    ListItemIcon
} from '@material-ui/core'

import {
    Home, Apps, Toys
} from '@material-ui/icons'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

// CSS STYLE
const theme = createMuiTheme();
const useStyles = makeStyles({
    menuContainer: {
        width: 250,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        height: '30rem',
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'white'
    }
});

const menuItems = [
    {
        listIcon: <Home />,
        listText: 'Quien Soy',
        listPath: "/"
    },
    {
        listIcon: <Apps />,
        listText: 'Mis Proyectos',
        listPath: "/misproyectos"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right:false
    })

    const toggleSLider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }

    const classes = useStyles();

    const sideList = slider => (
        <Box 
        className={classes.menuContainer} component='div'
        onClick={toggleSLider(slider, false)}
        >
            <Avatar className={classes.avatar} src='https://user-images.githubusercontent.com/60799456/92427042-1084b900-f151-11ea-9e1c-52760e46179c.JPG' alt='Cindy Baker' />
            <Divider />
            <List>
                {menuItems.map((IsItem, key) => (
                    <ListItem button key={key} component={Link} to= {IsItem.listPath} >
                        <ListItemIcon className={classes.listItem} >{IsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={IsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        < >

            <Box component='nav'>
                <AppBar position='static' style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>

                    <Toolbar>
                        <IconButton onClick ={toggleSLider("right", true)}>
                            <Toys />
                        </IconButton>
                        <MobilRightMenuSlider 
                        anchor="right"
                        open={state.right} onClose ={toggleSLider("right", false)}
                        > 
                        {sideList("right")}
                        <Footer/>
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar

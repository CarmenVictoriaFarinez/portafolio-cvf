import React, { useState } from 'react';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import { MenuItem, Typography } from '@material-ui/core';

import {
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
    Home, Apps
} from '@material-ui/icons'

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

// CSS STYLE
const theme = createMuiTheme();
const useStyles = makeStyles({
    
    menuContainer: {
        width: 250,
        background: '#CD5360',
        height: '30rem',
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "white",
        fontSize: "1.3rem"
       
    },
    menuButton:{
        marginRight: theme.spacing(2),
    },
    title:{
        textDecoration:"none",
        color: "white",
        fontFamily: 'Lato sans-serif' ,
        flexGrow:1,
    }
});

const menuItems = [
    {
        listIcon: <Apps />,
        listText: 'Skills',
        listPath: "/skills"
    },
    {
        listIcon: <Apps />,
        listText: 'Portafolio',
        listPath: "/misproyectos"
    },
    {
        listIcon: <Home />,
        listText: 'Sobre Mí',
        listPath: "/"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSLider = (slider, open) => () => {
        setState({ ...state, [slider]: open })
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
                    <ListItem button key={key} component={Link} to={IsItem.listPath} >
                        <ListItemIcon >{IsItem.listIcon}</ListItemIcon>
                        <ListItemText primary={IsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        < >

            <Box component='nav'>
                <AppBar position='fixed' style={{ background: '#286DA8' }}>

                    <Toolbar >
                        <IconButton onClick={toggleSLider("right", true)} >
                           
                        </IconButton>
                        <Typography component={Link} to="/" variant="h6" className={classes.title} >
                            VickyCar
                        </Typography>
                        <MenuItem className={classes.listItem}>
                            {menuItems.map((IsItem, key) => (
                                <ListItem  button key={key} component={Link} to={IsItem.listPath} >
                                <ListItemText  className={classes.listItemText} primary={IsItem.listText} />
                                </ListItem>
                            ))} 
                        </MenuItem>
                        <MobilRightMenuSlider
                            anchor="right"
                            open={state.right} onClose={toggleSLider("right", false)}
                        >
                            {sideList("right")}
                            
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
               
            </Box>
        </>
    )
}

export default Navbar

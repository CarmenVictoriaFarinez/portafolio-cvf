import React, { useState } from 'react';
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from '@material-ui/core'

import {
    AssignmentInd, Home, Apps, ContactMail, Toys
} from '@material-ui/icons'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';

// CSS STYLE
const theme = createMuiTheme();
const useStyles = makeStyles({
    menuContainer: {
        width: 250,
        backgroundColor: 'blue',
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
        listIcon: <AssignmentInd />,
        listText: 'Skills',
        listPath: "/skills"
    },
    {
        listIcon: <Apps />,
        listText: 'Mis Proyectos',
        listPath: "/misproyectos"
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contactame',
        listPath: "/contactame"
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
                <AppBar position='static' style={{ background: 'blue' }}>
                    <Toolbar>
                        <IconButton onClick ={toggleSLider("right", true)}>
                            <Toys />
                        </IconButton>
                        <a href="https://github.com/CarmenVictoriaFarinez/LIM012-fe-burger-queen-api-client/files/5189324/cv_carmen.pdf" download="cv_carmen.pdf">
                         <img src="https://user-images.githubusercontent.com/60799456/92436778-18e9ed80-f16b-11ea-8e42-4de33928eb29.png" alt="" style={{ width:"40%"}}/>
                        </a>
                        <MobilRightMenuSlider 
                        anchor="left"
                        open={state.right} onClose ={toggleSLider("left", false)}
                        > {sideList("right")}</MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar

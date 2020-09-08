import React from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import { Email } from '@material-ui/icons';

const useStyles= makeStyles ({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWith: 0,
            maxWith: 200
        },
        "& .MuiSvgIcon-root": {
            fill: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            "&:hover":{
                fill: "violet",
                fontSize: "1.8rem"
            }
        }

    }

});

const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" style={{background: "white"}}>
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0}}
                icon={<IconButton  target="_blank" href="https://www.linkedin.com/in/engineercvf/">
                <LinkedIn/>
                 </IconButton>}
                >
            </BottomNavigationAction>
                <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0}}
                icon={<IconButton target="_blank" href="https://github.com/CarmenVictoriaFarinez">
                <GitHub/>
                </IconButton>}
                >
            </BottomNavigationAction>
              
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0}}
                icon={<IconButton  target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSczfm55rfx63SAHr2kEBKhMZe_ZAVztR3ReOXU9kELz6rx6GQ/viewform">
                <Email />
                </IconButton>}
                > 
            </BottomNavigationAction>
        </BottomNavigation>
    )
}

export default Footer

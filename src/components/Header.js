import React from 'react'
import { Typography, Grid, Box,   ListItemIcon,
    IconButton, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import Whatsapp from '@material-ui/icons/WhatsApp';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import { Email } from '@material-ui/icons';

// CSS STYLES

const useStyles = makeStyles(theme => ({
    iconRedes: {
        horizontal: 'right',
        "& .MuiSvgIcon-root": {
            fill: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            "&:hover":{
                fill: "violet",
                fontSize: "1.8rem"
            }
        }
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(15),
    },
    title: {
        color: "violet",
    },
    subtitle: {
        color: "red",
        marginBottom: "3rem",
    },
    typedContainer: {
        position: "absolute",

        transform: "traslate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }

}));


const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer} >
            <Typography className={classes.title} variant="h4">
                <Typed
                    strings={['Mi nombre es Carmen Victoria']} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed
                    strings={['Front End Developer ', 'Ingenier❤️ de Sistemas']}
                    typeSpeed={60}
                    typeSpeed={80}
                    loop />
            </Typography>
            <Grid container justify="center">
                <img src="https://user-images.githubusercontent.com/60799456/92513800-7e26f880-f1d6-11ea-9193-ff7b05f82341.png" alt="" style={{ width: "30%" }} />
            </Grid>
            <ListItemIcon alignItems="flex-start" className={classes.iconRedes}>
                <IconButton href="https://wa.link/ENCI" target="_blank">
                    <Whatsapp />
                </IconButton>
                <IconButton target="_blank" href="https://www.linkedin.com/in/engineercvf/" >
                    <LinkedIn />
                </IconButton>
                <IconButton target="_blank" href="https://github.com/CarmenVictoriaFarinez">
                    <GitHub />
                </IconButton>
                <IconButton target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSczfm55rfx63SAHr2kEBKhMZe_ZAVztR3ReOXU9kELz6rx6GQ/viewform">
                    <Email />
                </IconButton>
            </ListItemIcon>
            <Grid container justify="center">
                <a href="https://github.com/CarmenVictoriaFarinez/LIM012-fe-burger-queen-api-client/files/5189324/cv_carmen.pdf" download="cv_carmen.pdf">
                    <img src="https://user-images.githubusercontent.com/60799456/92436778-18e9ed80-f16b-11ea-8e42-4de33928eb29.png" alt="" style={{ width: "50%" }} />
                </a>
            </Grid>
           


        </Box>
    )
}

export default Header

import React from 'react'
import {
    Typography, Grid, Box, ListItemIcon,
    IconButton, ListItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import Whatsapp from '@material-ui/icons/WhatsApp';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import { Email } from '@material-ui/icons';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

// CSS STYLES

const useStyles = makeStyles(theme => ({
    picMeContainer:{
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    aboutMeContainer: {
        textAlign:"center",
    },
    iconRedes: {
        horizontal: 'right',
        "& .MuiSvgIcon-root": {
            fontSize: "2rem",
            fill: "#286DA8",
            "&:hover": {
                fill: "#CD5360",
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
        color: "#CD5360",
    },
    subtitle: {
        color: "#286DA8",
        marginBottom: "3rem",
    },
    typedContainer: {
        marginTop: theme.spacing(5),
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
                <ListItem>
                   
                <img src="https://user-images.githubusercontent.com/60799456/93284513-7ea42e00-f798-11ea-80a5-b63b480a5aea.jpeg" alt="" style={{ width: "40%" }} />
                
                <Grid >
                <Typography className={classes.aboutMeContainer}>
                    Soy una Ingeniera de Sistemas reinventando su carrera. Me preparé en el bootcamp de programación intensivo de Laboratoria para ser Front-end Developer, en donde desarrollé aplicaciones web utilizando metodologías ágiles, y logré desarrollar mi capacidad de autoaprendizaje. Soy una persona persistente, que no se rinde ante las adversidades, siempre dando lo mejor de mi en el ámbito profesional y personal
                    <Grid container justify="center" className={classes.iconRedes} >
                <IconButton href="https://github.com/CarmenVictoriaFarinez/LIM012-fe-burger-queen-api-client/files/5189324/cv_carmen.pdf">
                    <CloudDownloadIcon />
                </IconButton>
                     </Grid>
                </Typography>
                    </Grid>
                </ListItem>
         

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
           
        </Box>
    )
}

export default Header

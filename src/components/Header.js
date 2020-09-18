import React from 'react'
import {
    Typography, Grid, Box, 
    IconButton, Card, CardMedia, CardContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Footer from './Footer';
import foto from '../images/foto.jpeg';

// CSS STYLES

const useStyles = makeStyles(theme => ({
    aboutMeContainer: {
        maxWidth:360,
        maxHeight:350,
        margin:"1rem",
        textAlign: "justify"
    },

    imgContainer:{
        maxWidth:260,
        maxHeight:300,
        marginTop:"1rem",
        marginLeft:"9rem",
        textAlign: "center"
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
        marginTop: theme.spacing(10),
        
        width: "100vw",
        textAlign: "center",
        
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
            <Grid item xs={14} sm={8} md={6}>
                <Card className={classes.imgContainer}>
                <CardContent>
                    <img src= { foto } alt="" />
                </CardContent>
                </Card>
            </Grid>
                
            <Grid item xs={10} sm={8} md={6}>
                <Card className={classes.aboutMeContainer}>
                    <CardContent>
                    <Typography className={classes.aboutMeContainer}>
                    "Soy una Ingeniera de Sistemas que ha decidido reinventar su carrera y ser FrontEnd Developer, mi experiencia en el sector tecnológico, siempre estuvo enfocado en el monitoreo de redes y resolución de fallas, ahora me apasiona crear productos. Soy una persona que no se rinde ante las adversidades. Te invito a descargar mi CV para conocerme un poco más."
                        <Grid container justify="center" className={classes.iconRedes} >
                    <IconButton href="https://github.com/CarmenVictoriaFarinez/LIM012-fe-burger-queen-api-client/files/5189324/cv_carmen.pdf">
                    <CloudDownloadIcon />
                    </IconButton>
                        </Grid>
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
            <Footer/>
            </Box>
    )
}

export default Header

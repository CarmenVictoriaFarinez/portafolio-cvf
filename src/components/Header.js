import React from 'react'
import {
    Typography, Grid, Box, 
    IconButton, ListItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Footer from './Footer';
import foto from '../images/foto.jpeg';

// CSS STYLES

const useStyles = makeStyles(theme => ({
    aboutMeContainer: {
        textAlign:"justify",
        
        [theme.breakpoints.down('sm')]: {
            paddingLeft:theme.spacing(8),
            fontSize: '0.7rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '0.9rem',
            paddingLeft:theme.spacing(10),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '1rem',
            paddingLeft:theme.spacing(18),
        }
    },

    itemsContainer:{
        width: "100vw",
    },
    imgContainer:{
        ".MuiGrid-root": {
        
        width: '100px',
        height:'127px',
        '@media (min-width:600px)': {
            width: '230px',
            height: '290px',
          
        },
        [theme.breakpoints.up('md')]: {
          width: '330px',
          height: '390px',
          
        },
    }
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

            

            <ListItem className={classes.itemsContainer}  >
 
            <Grid >
                <picture className={classes.imgContainer} >
                    <img 
                    src= {foto}
                    alt="" />
                </picture>
                </Grid>
                
                <Grid items lg={12}>
                    <Typography className={classes.aboutMeContainer}>
                    "Soy una Ingeniera de Sistemas que ha decidido reinventar su carrera y ser FrontEnd Developer, mi experiencia en el sector tecnológico, siempre estuvo enfocado en el monitoreo de redes y resolución de fallas, ahora me apasiona crear productos. Soy una persona que no se rinde ante las adversidades. Te invito a descargar mi CV para conocerme un poco más."
                        <Grid container justify="center" className={classes.iconRedes} >
                    <IconButton href="https://github.com/CarmenVictoriaFarinez/LIM012-fe-burger-queen-api-client/files/5189324/cv_carmen.pdf">
                    <CloudDownloadIcon />
                    </IconButton>
                        </Grid>
                    </Typography>
                </Grid>
            </ListItem>
            <Footer/>
            </Box>
    )
}

export default Header

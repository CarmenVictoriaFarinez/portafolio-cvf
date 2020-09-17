import React from 'react'
import {
    Typography, Grid, Box, 
    IconButton, ListItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Footer from './Footer';

// CSS STYLES

const useStyles = makeStyles(theme => ({


    
    itemsContainer:{
        flexGrow: 1,
    },
    imgContainer:{
        "& .MuiListItem-root": {
        paddingTop:theme.spacing(2),
        paddingLeft:theme.spacing(8),
        width: '200px',
        height:'227px',
        '@media (min-width:600px)': {
            width: '330px',
            height: '390px',
          paddingLeft:theme.spacing(10),
        },
        [theme.breakpoints.up('md')]: {
          width: '430px',
          height: '490px',
          paddingLeft:theme.spacing(18),
        },
    }
},
    
    aboutMeContainer: {
        textAlign:"justify",
        paddingRight:theme.spacing(16),
        fontSize: '0.7rem',
        '@media (min-width:600px)': {
          fontSize: '0.9rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '1rem',
        },
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

            

            <ListItem className={classes.itemsContainer} >

            <Grid className={classes.imgContainer}>
                    <img 
                    src="https://user-images.githubusercontent.com/60799456/93284513-7ea42e00-f798-11ea-80a5-b63b480a5aea.jpeg" 
                    alt="" />
                </Grid>
                
                <Grid item xs={12} md={8}>
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

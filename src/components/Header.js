import React from 'react'
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typed  from 'react-typed';

// CSS STYLES

const useStyles = makeStyles(theme =>({
avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(15),
},
title: {
    color:"violet",
},
subtitle: {
    color:"red",
    marginBottom:"3rem",
},
typedContainer:{
    position: "absolute",
    
    transform:"traslate(-50%, -50%)",
    width:"100vw",
    textAlign:"center",
    zIndex: 1
}

}));


const Header = () => {
    const classes = useStyles()
    return (
        <Box className ={classes.typedContainer} >
            <Grid container justify ="center">
            <img src="https://user-images.githubusercontent.com/60799456/92513148-7450c580-f1d5-11ea-93b9-25ca8356236a.jpeg" alt="" style={{ width:"100%"}}/>
           </Grid>
           <Grid container justify ="center">
           <a href="https://github.com/CarmenVictoriaFarinez/LIM012-fe-burger-queen-api-client/files/5189324/cv_carmen.pdf" download="cv_carmen.pdf">
            <img src="https://user-images.githubusercontent.com/60799456/92436778-18e9ed80-f16b-11ea-8e42-4de33928eb29.png" alt="" style={{ width:"60%"}}/>
            </a>
            </Grid>
           <Typography  className ={classes.title} variant ="h4">
           <Typed
                strings={['Mi nombre es Carmen Victoria']}typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className ={classes.subtitle}variant ="h5">
           <Typed
                strings={['FrontEnd Development', 'Ingenier❤️ de Sistemas'] }
                typeSpeed= {60} 
                typeSpeed= {80} 
                loop/>
            </Typography>
            
        
        </Box>
    )
}

export default Header

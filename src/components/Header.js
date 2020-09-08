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
           <Avatar  className ={classes.avatar} src='https://user-images.githubusercontent.com/60799456/92427042-1084b900-f151-11ea-9e1c-52760e46179c.JPG' alt='Cindy Baker' /> 
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

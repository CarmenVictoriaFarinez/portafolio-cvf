import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ReactCardFlip from 'react-card-flip';
import { Box, Grid, Card, CardContent, IconButton } from '@material-ui/core';
import react from '../images/react.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    imgContainer:{
        maxWidth:260,
        maxHeight:300,
        marginTop:"1rem",
        marginLeft:"9rem",
        textAlign: "center",
        fontFamily: 'Lato sans-serif' ,
},
});


const Skills = () => {
    const classes = useStyles()
    return (
        <Box>
        <Navbar/>
        <Grid>
        <Card item xs={14} sm={8} md={6}>
            <CardContent  className={classes.imgContainer} style={{ color: '#CD5360', textAlign: "center"}} >
            <img src= { react } alt="" />
                </CardContent>
                </Card>
        
        </Grid>
        <Footer/>
        </Box>
    )
}

export default Skills

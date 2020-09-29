import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core';
import react from '../images/react.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    subtitle: {
        fontFamily: 'Lato sans-serif' ,
        color: '#286DA8',
        fontSize: '2.3rem',
        textAlign: 'center',
        marginTop: '5rem',
    },

    cardContainer:{
        margin:'1rem', 
        textAlign: 'center',
    },

});


const Skills = () => {
    const classes = useStyles()
    return (
        <Box component="div" >
        <Navbar/>
        <Typography className={classes.subtitle} >
            Habilidades Técnicas
            </Typography>
            <hr className="decoratorLine"></hr>
        <Grid container justify="center">
        
            
        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent style={{ textAlign: "center"}}>
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
            </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer}>
            <CardContent style={{ textAlign: "center"}}>
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent   style={{ textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent  style={{ textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent   style={{ textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent   style={{ textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent  style={{ color: '#CD5360', textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent  style={{ textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent   style={{ textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent style={{ color: '#CD5360', textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent style={{ color: '#CD5360', textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent  style={{ textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                React
                </Typography >
            </CardContent>
            </Card>
        </Grid>
        </Grid>
        <Footer/>
        </Box>
    )
}

export default Skills

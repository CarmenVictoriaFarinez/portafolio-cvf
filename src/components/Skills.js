import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import { Box, Grid, Card, CardContent, Typography } from '@material-ui/core';

import logos_html from '../images/Portafolio/logos_html.png';
import logos_sass from '../images/Portafolio/logos_sass.png';
import logos_javascript from '../images/Portafolio/logos_javascript.png';
import logos_npm from '../images/Portafolio/logos_npm.png';
import logos_nodejs from '../images/Portafolio/logos_nodejs.png';
import logos_angular from '../images/Portafolio/logos_angular.png';
import react from '../images/Portafolio/react.png';
import logos_jest from '../images/Portafolio/logos_jest.png';
import logos_trello from '../images/Portafolio/logos_trello.png';
import github from '../images/Portafolio/github.png';
import logos_css from '../images/Portafolio/logos_css.png';
import logos_firebase from '../images/Portafolio/logos_firebase.png';

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
            <img src= { logos_html} alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                HTML
            </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer}>
            <CardContent style={{ textAlign: "center"}}>
            <img src= { logos_sass } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                SASS
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent   style={{ textAlign: "center"}} >
            <img src= { logos_javascript } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
               JAVASCRIPT
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent  style={{ textAlign: "center"}} >
            <img src= { logos_npm } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
               NPM
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent   style={{ textAlign: "center"}} >
            <img src= { logos_nodejs } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                NODE.JS
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent   style={{ textAlign: "center"}} >
            <img src= { logos_angular } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                ANGULAR
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent  style={{ color: '#CD5360', textAlign: "center"}} >
            <img src= { react } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                REACT
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent  style={{ textAlign: "center"}} >
            <img src= { logos_jest } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                JEST
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent   style={{ textAlign: "center"}} >
            <img src= { logos_trello } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                TRELLO
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent style={{ color: '#CD5360', textAlign: "center"}} >
            <img src= { github } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                GITHUB
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent style={{ color: '#CD5360', textAlign: "center"}} >
            <img src= { logos_css } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                CSS
                </Typography >
            </CardContent>
            </Card>
        </Grid>

        <Grid item xs={8} sm={4} md={2}>
        <Card className={classes.cardContainer} >
            <CardContent  style={{ textAlign: "center"}} >
            <img src= { logos_firebase } alt="" />
            <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center", fontFamily: 'Lato sans-serif' }}>
                FIREBASE
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

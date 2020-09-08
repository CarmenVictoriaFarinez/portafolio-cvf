import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Box, Grid, Card, CardActionArea, CardContent, CardMedia, 
    Button, Typography, CardActions } from '@material-ui/core';
import Navbar from './Navbar';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.png';
import project3 from '../images/project3.jpg';


const useStyles = makeStyles({
    mainContainer:{
        background:"#233",
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        margin:"3rem",
        margin:"5rem auto"
    }
});


const MisProyectos = () => {
const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
        <Navbar/>
        <Grid container justify="center" >
            { /* Project 1 */ }
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img"
                alt ="Proyecto 1"
                height="140"
                image= {project1}
                />
                <CardContent>
                <Typography gutterBottom variant="h5">
                RED SOCIAL MOVES
                </Typography >
                <Typography variant="body2" color="textSecundary" component="p">
                MOVES es un aplicación (SPA), responsiva en la que podamos escribir, leer, actualizar y eliminar datos. 
                Es una red social para los amantes del baile de todos los géneros musicales. Este proyecto fue realizado utilizando la metodología Scrum.
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small color="primary>
                        Website
                    </Button>
                    <Button size="small color="primary>
                        Github
                    </Button>
                </CardActions>
            </CardActionArea>
            </Card>
            { /* Project 2 */ }
            <Card className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img"
                alt ="Proyecto 2"
                height="140"
                image= {project2}
                />
                <CardContent>
                <Typography gutterBottom variant="h5">
                Burger Queen (API Client)
                </Typography >
                <Typography variant="body2" color="textSecundary" component="p">
                Aplicación Single Page App (SPA), implementada en Angular, la cual consume información a través de una Application Programming Interface (API) que se conecta vía web a través del protocolo HTTP. 
                Su objetivo es facilitar el sistema de pedidos de un pequeño restaurante.
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small color="primary>
                        Website
                    </Button>
                    <Button size="small color="primary>
                        Github
                    </Button>
                </CardActions>
            </CardActionArea>
            </Card>
            { /* Project 3 */ }
            <Card className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img"
                alt ="Proyecto 3"
                height="140"
                image= {project3}
                />
                <CardContent>
                <Typography gutterBottom variant="h5">
                Library Markdown Links
                </Typography >
                <Typography variant="body2" color="textSecundary" component="p">
                El objetivo de este proyecto fue crear una librería implementada en JavaScript, y ejecutada usando Node.js, 
                que lea y analice archivos en formato Markdown, para verificar los links que contengan 
                y reportar algunas estadísticas.
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small color="primary>
                        Website
                    </Button>
                    <Button size="small color="primary>
                        Github
                    </Button>
                </CardActions>
            </CardActionArea>
            </Card>

            </Grid>
        </Grid>
        </Box>
    )
}

export default MisProyectos
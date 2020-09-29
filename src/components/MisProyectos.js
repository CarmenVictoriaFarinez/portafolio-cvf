import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Box, Grid, Card, CardActionArea, CardContent, CardMedia, 
    Button, Typography, CardActions } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.png';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.png';
import project5 from '../images/project5.png';


const useStyles = makeStyles({
    mainBotons: {
        marginLeft:"4.5rem",
    },
    mainContainer:{
        background:"#233",
        height:"100%",
        textAlign: "justify"
    },
    cardContainer:{
        maxWidth:345,
        margin:"3rem",
        margin:"5rem auto",  
    },
    typoText:{
        fontFamily: 'Lato sans-serif' ,
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
                height="180"
                image= {project1}
                />
                <CardContent  >
                <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center"}} >
                RED SOCIAL MOVES
                </Typography >
                <Typography variant="body2" color="textSecundary" component="p" className={classes.typoText}>
                MOVES es un aplicación (SPA), responsiva en la que podamos escribir, leer, actualizar y eliminar datos. Es una red social para los amantes del baile de todos los géneros musicales. Este proyecto fue realizado utilizando la metodología Scrum.
                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.mainBotons}>
                    <Button target="_blank" href= "https://carmenvictoriafarinez.github.io/LIM012-fe-social-network/src/"
                    style={{ background: '#CD5360' }}>
                        Website
                    </Button>
                    <Button target="_blank" href= "https://github.com/CarmenVictoriaFarinez/LIM012-fe-social-network"
                    style={{ background:  '#CD5360' }}>
                        Github
                    </Button>
                </CardActions>
            
            </Card>
            </Grid>
            { /* Project 2 */ }
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img"
                alt ="Proyecto 2"
                height="180"
                image= {project2}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: '#B37D4E', textAlign: "center"}} >
                Burger Queen (API Client)
                </Typography >
                <Typography variant="body2" color="textSecundary" component="p"className={classes.typoText}>
                Aplicación Single Page App (SPA), implementada en Angular, consume información a través de una Application Programming Interface (API) que se conecta vía web a través del protocolo HTTP. Su objetivo es facilitar el sistema de pedidos de un restaurante.
                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.mainBotons}>
                    <Button target="_blank" href="https://lim012burgerqueenapiclient.web.app/"
                    style={{ background: '#B37D4E' }}>
                        Website
                    </Button>
                    <Button target="_blank" href="https://github.com/CarmenVictoriaFarinez/LIM012-fe-burger-queen-api-client"
                    style={{ background: '#B37D4E' }}>
                        Github
                    </Button>
                </CardActions>
            
            </Card>
            </Grid>
            { /* Project 3 */ }
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img"
                alt ="Proyecto 3"
                height="180"
                image= {project3}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: '#438496' , textAlign: "center"}}>
                Library Markdown Links
                </Typography >
                <Typography variant="body2" color="textSecundary" component="p" className={classes.typoText}>
                El objetivo de este proyecto fue crear una librería implementada en JavaScript, y ejecutada usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.
                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.mainBotons}>
                    <Button target="_blank" href="https://github.com/CarmenVictoriaFarinez/LIM012-fe-md-links"
                    style={{ background: '#438496' }}>
                        Website
                    </Button>
                    <Button target="_blank" href="https://github.com/CarmenVictoriaFarinez/LIM012-fe-md-links"
                    style={{ background: '#438496'  }}>
                        Github
                    </Button>
                </CardActions>
           
            </Card>
            </Grid>
            { /* Project 5 */ }
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img"
                alt ="Proyecto 5"
                height="180"
                image= {project5}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: '#B37D4E', textAlign: "center"}}>
                Piano React
                </Typography >
                <Typography variant="body2" color="textSecundary" component="p"className={classes.typoText}>
                El objetivo de este proyecto fue aprender los conceptos básicos de React, tuve la inicitiva de inscribirme en un WorkShop de Iniciación, en el cual fuimos guiados para finalmente, obtener este hermoso Piano.
                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.mainBotons}>
                    <Button target="_blank" href="https://carmenvictoriafarinez.github.io/workshop-react-piano/"
                    style={{ background: '#B37D4E' }}>
                        Website
                    </Button>
                    <Button target="_blank" href="https://github.com/CarmenVictoriaFarinez/workshop-react-piano"
                    style={{ background: '#B37D4E'  }}>
                        Github
                    </Button>
                </CardActions>
            </Card>
            </Grid>
            { /* Project 4 */ }
            <Grid item xs={12} sm={8} md={6}>
            <Card className={classes.cardContainer}>
            <CardActionArea>
                <CardMedia component="img"
                alt ="Proyecto 4"
                height="180"
                image= {project4}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" style={{ color: '#CD5360', textAlign: "center"}}>
                Data Lovers Olympic History
                </Typography >
                <Typography variant="body2" color="textSecundary" component="p"className={classes.typoText}>
                El objetivo de este proyecto fue aprender a visualizar y manipular data. Esta app permite al usuario visualizar a los atletas por nombre, deporte practicado y pais representado, a partir de esa data, permite ordenarla alfabeticamente y filtrar a los atletas por deporte.
                </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.mainBotons}>
                    <Button target="_blank" href="https://carmenvictoriafarinez.github.io/LIM012-data-lovers/src/"
                    style={{ background: '#CD5360' }}>
                        Website
                    </Button>
                    <Button target="_blank" href="https://github.com/CarmenVictoriaFarinez/LIM012-data-lovers"
                    style={{ background: '#CD5360' }}>
                        Github
                    </Button>
                </CardActions>
           
            </Card>
            </Grid>
          
        </Grid>
        <Footer/>
        </Box>
    )
}

export default MisProyectos

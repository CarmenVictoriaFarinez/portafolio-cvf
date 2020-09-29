import React from 'react';
import { makeStyles, IconButton, Typography, Box } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import { Email } from '@material-ui/icons';
import Whatsapp from '@material-ui/icons/WhatsApp';

const useStyles= makeStyles ({
    typoContact:{
        fontFamily: 'Lato sans-serif' ,
        color: 'white',
        fontSize: "1.3rem"
    },
    footerContainer: {
        width: "100vw",
    },
        iconRedes: {
            horizontal: 'right',
            "& .MuiSvgIcon-root": {
                fontSize: "2rem",
                fill: "#FFFFF0",
                "&:hover": {
                    fill: "#CD5360",
                    fontSize: "1.8rem"
                }
            },
       
    }
}
);

const Footer = () => {
    const classes = useStyles();
    return (
        <Box  textAlign="center" style={{ background: '#B37D4E' }}>
        <Typography className={classes.typoContact}>
            Contáctame
        </Typography>
        <ListItemIcon className={classes.iconRedes}>
        <IconButton href="https://wa.link/ENCI" target="_blank">
            <Whatsapp />
        </IconButton>
        <IconButton target="_blank" href="https://www.linkedin.com/in/engineercvf/" >
            <LinkedIn />
        </IconButton>
        <IconButton target="_blank" href="https://github.com/CarmenVictoriaFarinez">
            <GitHub />
        </IconButton>
        <IconButton target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSczfm55rfx63SAHr2kEBKhMZe_ZAVztR3ReOXU9kELz6rx6GQ/viewform">
            <Email />
        </IconButton>
    </ListItemIcon>
    <Typography className={classes.typoContact}>
        Copyright © 2020 Carmen V. Fariñez
        </Typography>
    </Box>
    )
}

export default Footer

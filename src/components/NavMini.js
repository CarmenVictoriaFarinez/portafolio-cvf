import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
   
    menuContainer: {
       
        background: '#286DA8',
        
    },
});

export default function NavMini() {
    const classes = useStyles();
    return (
        <nav className={classes.menuContainer}>
            <ul>
                <li><NavLink to="/" activeClassName="active">Sobre Mí</NavLink></li>
                <li><NavLink to="/misproyectos">Proyectos</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/">Contáctame</NavLink></li>
                
            </ul>
        </nav>
    );
};
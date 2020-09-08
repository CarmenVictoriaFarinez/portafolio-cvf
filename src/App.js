import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from './components';
import MisProyectos from './components/MisProyectos';
import Skills from './components/MisProyectos';
import Contactame from './components/MisProyectos';
import { Route } from 'react-router-dom';


function App() {
  return (
    < >
    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route path="/misproyectos" component={MisProyectos}/>
    <Route path="/skills" component={Skills}/>
    <Route path="/contactame" component={Contactame}/>
    </>

  );
}

export default App;

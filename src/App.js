import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import FrontEnd from './components/FrontEnd'
import DigitalWork from './components/DigitalWork'
import Contact from './components/Contact'
import {useTransition, animated} from 'react-spring'
import './App.css';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar /> 
          <Switch>
            <Route exact path = "/" render={() => <Home />}/>
            <Route exact path = "/about" render={() => <About />}/>
            <Route exact path = "/front-end" render={() => <FrontEnd />}/>
            <Route exact path = "/digital-work" render={() => <DigitalWork />}/>
            <Route exact path = "/contact" render={() => <Contact />}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

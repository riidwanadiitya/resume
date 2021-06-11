import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Brand from './components/Brand';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';

import './App.css';


export class Routes extends Component {
    render() {
        return (
            <div className='bgColor'>
                <Router>
                    <Brand />
                    <Navigation />
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/portofolio" component={Portofolio}></Route>
                        <Route path="/contact" component={Contact}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes

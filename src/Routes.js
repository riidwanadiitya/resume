import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Brand from './components/Brand';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';
import store from './redux/store';
import { Provider } from "react-redux";


import './App.css';


export class Routes extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="bg1">
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
            </Provider>
        )
    }
}

export default Routes

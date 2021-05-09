import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu } from 'semantic-ui-react';


import '../App.css';


export class Navigation extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column floated='right' width={5} className="jarakNavbar">
                        <Menu secondary>
                            <Menu.Item as={Link} to="/">Home</Menu.Item>
                            <Menu.Item as={Link} to="/about">About</Menu.Item>
                            <Menu.Item as={Link} to="/portofolio">Portofolio</Menu.Item>
                            <Menu.Item as={Link} to="/contact">Contact</Menu.Item>
                        </Menu>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Navigation

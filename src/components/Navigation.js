import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Container } from 'semantic-ui-react';


import '../App.css';


export class Navigation extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Container>
                    <Grid>
                        <Grid.Column>
                            <Menu secondary>
                                <Menu.Menu position="right" >
                                    <Menu.Item
                                        name='home'
                                        active={activeItem === 'home'}
                                        onClick={this.handleItemClick}
                                        as={Link} to="/"
                                        style={{ color: "white" }}
                                    />
                                    <Menu.Item
                                        name='about'
                                        active={activeItem === 'about'}
                                        onClick={this.handleItemClick}
                                        as={Link} to="/about"
                                        style={{ color: "white" }}
                                    />
                                    <Menu.Item
                                        name='portofolio'
                                        active={activeItem === 'portofolio'}
                                        onClick={this.handleItemClick}
                                        as={Link} to="/portofolio"
                                        style={{ color: "white" }}
                                    />
                                    <Menu.Item
                                        name='contact'
                                        active={activeItem === 'contact'}
                                        onClick={this.handleItemClick}
                                        as={Link} to="/contact"
                                        style={{ color: "white" }}
                                    />
                                </Menu.Menu>
                            </Menu>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Navigation

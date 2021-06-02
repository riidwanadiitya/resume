import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Input } from 'semantic-ui-react';


import '../App.css';


export class Navigation extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Grid>
                    <Grid.Column floated='right' width={5} className="jarakNavbar">
                        <Menu secondary>
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                                as={Link} to="/"
                            />
                            <Menu.Item
                                name='about'
                                active={activeItem === 'about'}
                                onClick={this.handleItemClick}
                                as={Link} to="/about"
                            />
                            <Menu.Item
                                name='portofolio'
                                active={activeItem === 'portofolio'}
                                onClick={this.handleItemClick}
                                as={Link} to="/portofolio"
                            />
                            <Menu.Item
                                name='contact'
                                active={activeItem === 'contact'}
                                onClick={this.handleItemClick}
                                as={Link} to="/contact"
                            />
                            {/* <Menu.Item as={Link} to="/" >Home</Menu.Item>
                            <Menu.Item as={Link} to="/about">About</Menu.Item>
                            <Menu.Item as={Link} to="/portofolio">Portofolio</Menu.Item>
                            <Menu.Item as={Link} to="/contact">Contact</Menu.Item> */}
                        </Menu>
                    </Grid.Column>
                </Grid>

                {/* <Menu secondary>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                        as={Link} to="/"
                    />
                    <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                        as={Link} to="/about"
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu> */}
            </div>
        )
    }
}

export default Navigation

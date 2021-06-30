import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Menu, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { activePage } from '../redux';
import '../App.css';


export class Navigation extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Grid>
                        <Grid.Column>
                            <Menu pointing secondary >
                                <Menu.Menu position="right" >
                                    <Menu.Item
                                        name='home'
                                        as={Link} to="/"
                                        active={this.props.navActive === 'home'}
                                        onClick={this.props.activePage}
                                        style={{ color: "white" }}
                                    />
                                    <Menu.Item
                                        name='about'
                                        as={Link} to="/about"
                                        active={this.props.navActive === 'about'}
                                        onClick={this.props.activePage}
                                        style={{ color: "white" }}
                                    />
                                    <Menu.Item
                                        name='portofolio'
                                        as={Link} to="/portofolio"
                                        active={this.props.navActive === 'portofolio'}
                                        onClick={this.props.activePage}
                                        style={{ color: "white" }}
                                    />
                                    <Menu.Item
                                        name='contact'
                                        as={Link} to="/contact"
                                        active={this.props.navActive === 'contact'}
                                        onClick={this.props.activePage}
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
};

function mapStateToProps(state) {
    return {
        navActive: state.navigation.activePage,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        activePage: (e, { name }) => dispatch(activePage(name)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

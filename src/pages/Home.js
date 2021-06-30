import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Image, Header, Button, Icon, Segment, Transition } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { activeAbout } from '../redux';


import foto1 from '../images/no-bg2.png';
import '../App.css';

export class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid style={{ marginTop: 30, paddingLeft: 50, paddingRight: 50, paddingBottom: 100 }}>
                    <Transition animation='browse' duration={1300} transitionOnMount>
                        <Container style={{ paddingLeft: -100, paddingRight: -100 }}>
                            <Segment placeholder style={{ marginLeft: -40, marginRight: -40 }}>
                                <Grid columns={2} stackable textAlign='center'>
                                    <Grid.Row verticalAlign='middle'>
                                        <Grid.Column>
                                            <Header >
                                                <Image src={foto1} circular style={{ width: "70%" }} />
                                            </Header>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Header >
                                                <Header as="h1" textAlign="center" style={{ marginTop: 60 }}>Hello, I'm Ridwan.</Header>
                                                <Header as="h3" textAlign='center' style={{ marginTop: -10 }}>Frontend Developer</Header>
                                                <Header as="h3" textAlign='center'>
                                                    I'm an Indonesian frontend developer. I am pasionate about building exelent website.
                                                </Header>
                                            </Header>
                                            <Button animated textAlign="center" as={Link} to="/about"
                                                onClick={this.props.activePage}>
                                                <Button.Content visible style={{ color: "black" }}>More Info</Button.Content>
                                                <Button.Content hidden ><Icon name='right arrow'></Icon></Button.Content>
                                            </Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Container>
                    </Transition>
                </Container>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        navActive: state.navigation.activePage,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        activePage: (e) => dispatch(activeAbout()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

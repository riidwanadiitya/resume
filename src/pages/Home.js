import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Grid, Image, Header, Button, Icon, Segment, Search } from 'semantic-ui-react';

import foto1 from '../images/no-bg2.png'

export class Home extends Component {
    render() {
        return (
            <div>
                <Container fluid style={{ marginTop: 30, paddingLeft: 50, paddingRight: 50, paddingBottom: 100 }}>
                    <Segment placeholder>
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
                                    <Button animated textAlign="center" as={Link} to="/about">
                                        <Button.Content visible style={{ color: "black" }}>More Info</Button.Content>
                                        <Button.Content hidden ><Icon name='right arrow'></Icon></Button.Content>
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                    {/* <Grid >
                        <Grid.Column floated='left' width={6} >
                            <Image src={foto1} circular />
                        </Grid.Column>
                        <Grid.Column floated='right' width={7}>
                            <Header as="h1" textAlign="center" style={{ marginTop: 60 }}>Hello, I'm Ridwan.</Header>
                            <Header as="h3" textAlign='center' style={{ marginTop: -10 }}>Frontend Developer</Header>
                            <Header as="h3" textAlign='center'>
                                I'm an Indonesian frontend developer. I am pasionate about building exelent website.
                            </Header>
                            <Button animated floated="right" as={Link} to="/about">
                                <Button.Content visible style={{ color: "black" }}>More Info</Button.Content>
                                <Button.Content hidden ><Icon name='right arrow'></Icon></Button.Content>
                            </Button>
                        </Grid.Column>
                    </Grid> */}
                </Container>
            </div >
        )
    }
}

export default Home

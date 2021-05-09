import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Grid, Image, Header, Button, Icon, Segment, } from 'semantic-ui-react'

export class Home extends Component {
    render() {
        return (
            <div>
                <Container style={{ marginTop: 30, paddingLeft: 50, paddingRight: 50 }}>
                    <Grid >
                        <Grid.Column floated='left' width={6} >

                            <Image src='http://localhost:3000/images/0005.jpg' circular />

                        </Grid.Column>
                        <Grid.Column floated='right' width={7}>
                            <Header as="h2" textAlign="center" style={{ marginTop: 60 }}>Hello, I'm Ridwan.</Header>
                            <Header as="h3" textAlign='center' style={{ marginTop: -10 }}>Frontend Developer</Header>
                            <Segment style={{ fontSize: 20 }}>
                                I'm an Indonesian frontend developer. I am pasionate about building exelent website.
                            </Segment>
                            <Button animated floated="right" as={Link} to="/about">
                                <Button.Content visible>More Info</Button.Content>
                                <Button.Content hidden ><Icon name='right arrow'></Icon></Button.Content>
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div >
        )
    }
}

export default Home

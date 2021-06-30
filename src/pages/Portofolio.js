import React, { Component } from 'react'
import { Container, Grid, Header, Segment, Transition, Image } from 'semantic-ui-react';


import foto1 from '../images/default.jpg'


export class Portofolio extends Component {
    render() {
        return (
            <div>
                <Container textAlign="center" style={{ paddingBottom: 100 }}>
                    <Transition animation="fade down" duration={2500} transitionOnMount>
                        <Header as='h1' style={{ color: "white" }}>Portofolio</Header>
                    </Transition>
                    <Container style={{ marginLeft: 50, marginRight: 50 }}>
                        <Segment placeholder>
                            <Grid columns={2} stackable textAlign='center'>
                                <Grid.Row >
                                    <Grid.Column width={6}><Header as="h3" >Project 1</Header>
                                        <Transition animation='fade right' duration={2500} transitionOnMount>
                                            <Image src={foto1} />
                                        </Transition>
                                    </Grid.Column>
                                    <Grid.Column width={6}><Header as="h3" >Project 2</Header>
                                        <Transition animation='fade down' duration={2500} transitionOnMount>
                                            <Image src={foto1} />
                                        </Transition>
                                    </Grid.Column>
                                    <Grid.Column width={6}><Header as="h3" >Project 3</Header>
                                        <Transition animation='fade left' duration={2500} transitionOnMount>
                                            <Image src={foto1} />
                                        </Transition>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Portofolio

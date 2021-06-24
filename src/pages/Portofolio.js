import React, { Component } from 'react'
import { Container, Image, Grid, Transition, Header } from 'semantic-ui-react'

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
                        <Grid columns={3} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    <Transition animation='fade right' duration={2500} transitionOnMount>
                                        <Image src={foto1} />
                                    </Transition>
                                </Grid.Column>
                                <Grid.Column>
                                    <Transition animation='fade down' duration={2500} transitionOnMount>
                                        <Image src={foto1} />
                                    </Transition>
                                </Grid.Column>
                                <Grid.Column>
                                    <Transition animation='fade left' duration={2500} transitionOnMount>
                                        <Image src={foto1} />
                                    </Transition>
                                </Grid.Column>
                            </Grid.Row>

                            {/* <Grid.Row>
                                <Grid.Column>
                                    <Transition animation='fade right' duration={2500} transitionOnMount>
                                        <Image src={foto1} />
                                    </Transition>
                                </Grid.Column>
                                <Grid.Column>
                                    <Transition animation='fade up' duration={2500} transitionOnMount>
                                        <Image src={foto1} />
                                    </Transition>
                                </Grid.Column>
                                <Grid.Column>
                                    <Transition animation='fade left' duration={2500} transitionOnMount>
                                        <Image src={foto1} />
                                    </Transition>
                                </Grid.Column>
                            </Grid.Row> */}
                        </Grid>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Portofolio

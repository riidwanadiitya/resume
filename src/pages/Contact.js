import React, { Component } from 'react';
import { Container, Grid, Header, Button, Icon, Segment, Transition } from 'semantic-ui-react';

import '../App.css';

export class Contact extends Component {
    render() {
        return (
            <div>
                <Container textAlign="right" style={{ marginTop: 30, paddingLeft: 50, paddingRight: 50, paddingBottom: 170 }} >
                    <Transition animation="fade right" duration={2500} transitionOnMount>
                        <Header as='h1' style={{ color: "white" }}>Contact</Header>
                    </Transition>
                    <Transition animation='zoom' duration={2500} transitionOnMount>
                        <Container style={{ marginTop: 50 }}>
                            <Segment placeholder>
                                <Grid columns={2} stackable textAlign='center'>
                                    <Grid.Row >
                                        <Grid.Column width={6}><Header as="h1" style={{ marginBottom: 50 }} >DON'T BE SHY!</Header>
                                            <Header as="h4">
                                                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                            </Header>
                                        </Grid.Column>

                                        <Grid.Column >
                                            <Header as="h1" style={{ marginBottom: 50 }}>Social Media</Header>
                                            <Button animated color="instagram" style={{ width: 170 }}>
                                                <Button.Content visible><Icon name="instagram" /> Instagram</Button.Content>
                                                <Button.Content hidden><a href="https://www.instagram.com/riidwanadiitya/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>@riidwanadiitya </a></Button.Content>
                                            </Button>
                                            <Button animated positive style={{ width: 170 }}>
                                                <Button.Content visible><Icon name="whatsapp" /> Whatsapp</Button.Content>
                                                <Button.Content hidden><a href="https://wa.me/6289639247810" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>+62-896-3924-7810 </a></Button.Content>
                                            </Button>
                                            <Button animated negative style={{ width: 170 }}>
                                                <Button.Content visible><Icon name="envelope outline" /> Gmail</Button.Content>
                                                <Button.Content hidden><a href="https://wa.me/6289639247810" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>riidwanadiitya@gmail.com </a></Button.Content>
                                            </Button>
                                            <Header as='h4' style={{ marginTop: 50 }}>Jl. Kolonel Bustomi Burhanudin, Kp. Caringin RT 002 / RW 002 Desa. Caringin, Kab. Bogor 16730 - Jawa Barat</Header>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </Container>
                    </Transition>
                </Container>

            </div>
        )
    }
}

export default Contact

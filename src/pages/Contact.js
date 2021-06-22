import React, { Component } from 'react';
import { Container, Grid, Header, Button, Icon, Segment } from 'semantic-ui-react';

import '../App.css';

export class Contact extends Component {
    render() {
        return (
            <div>
                <Container textAlign="center" style={{ marginTop: 30, paddingLeft: 50, paddingRight: 50, paddingBottom: 170 }} >
                    <h1>Contact </h1>
                    <Container style={{ marginTop: 50 }}>
                        <Segment placeholder>
                            <Grid columns={2} stackable textAlign='center'>
                                <Grid.Row >
                                    <Grid.Column width={6}><Header as="h1" style={{ marginBottom: 50 }} >DON'T BE SHY!</Header>
                                        <Header as="h3">
                                            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                        </Header>
                                    </Grid.Column>

                                    <Grid.Column width={8} style={{ marginLeft: 50 }}>
                                        <Header as="h1" style={{ marginBottom: 50 }}>Social Media</Header>
                                        <Button color='instagram' href="https://www.instagram.com/riidwanadiitya/" target="_blank">
                                            <Icon name='instagram' /> Instagram
                                        </Button>
                                        <Button positive href="https://wa.me/6285718895449" target="_blank">
                                            <Icon name='whatsapp' /> Whatsapp
                                        </Button>
                                        <Button color='negative' href="mailto:riidwanadiitya@gmail.com" target="_blank ">
                                            <Icon name='envelope outline' /> Gmail
                                        </Button>

                                        <Header as='h3' style={{ marginTop: 50 }}>Jl. Kolonel Bustomi Burhanudin, Kp. Caringin RT 002 / RW 002 Desa. Caringin, Kab. Bogor 16730 - Jawa Barat</Header>
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

export default Contact

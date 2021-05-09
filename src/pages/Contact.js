import React, { Component } from 'react'
import { Card, Container, Grid, Header } from 'semantic-ui-react'

export class Contact extends Component {
    render() {
        return (
            <div>
                <Container textAlign="center" >
                    <h1>Contact Page...</h1>
                    <Container style={{ marginTop: 50 }}>
                        <Grid>
                            <Grid.Row columns={2}>
                                <Grid.Column width={4}><Header as="h2">DON'T BE SHY!</Header>
                                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</Grid.Column>
                                <Grid.Column width={7}>
                                    <Grid.Row>
                                        <Grid.Column>test 1</Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>Test</Grid.Column>
                                    </Grid.Row>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>

                </Container>

            </div>
        )
    }
}

export default Contact

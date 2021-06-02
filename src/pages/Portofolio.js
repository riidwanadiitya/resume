import React, { Component } from 'react'
import { Container, Image, Grid } from 'semantic-ui-react'

import foto1 from '../images/0005.jpg'


export class Portofolio extends Component {
    render() {
        return (
            <div>
                <Container textAlign="center" style={{ paddingBottom: 100 }}>
                    <h1 >Portofolio Page...</h1>
                    <Container style={{ marginLeft: 50, marginRight: 50 }}>
                        <Grid columns={3} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    <Image src={foto1} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={foto1} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={foto1} />
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                    <Image src={foto1} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={foto1} />
                                </Grid.Column>
                                <Grid.Column>
                                    <Image src={foto1} />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Portofolio

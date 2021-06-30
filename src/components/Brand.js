import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';


import '../App.css';


export class Brand extends Component {
    render() {
        return (
            <div >
                <Container>
                    <Header as="h2" style={{ paddingTop: 10, color: 'white' }}>
                        Ridwan
                    </Header>
                </Container>
            </div>
        )
    }
}

export default Brand

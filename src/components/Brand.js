import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import '../App.css';

export class Brand extends Component {
    render() {
        return (
            <div>
                <Header as="h2" className="brandStyles" style={{ paddingTop: 10 }}>
                    <Image className="brandStyles" circular src='http://localhost:3000/images/0005.jpg' /> Ridwan
                </Header>
            </div>
        )
    }
}

export default Brand

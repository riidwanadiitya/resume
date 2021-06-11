import React, { Component } from 'react';
import { Header, Image } from 'semantic-ui-react';
import '../App.css';

import foto1 from '../images/ridwan.jpg'

export class Brand extends Component {
    render() {
        return (
            <div>
                <Header as="h2" className="brandStyles" style={{ paddingTop: 10 }}>
                    <Image className="brandStyles" circular src={foto1} /> Ridwan
                </Header>
            </div>
        )
    }
}

export default Brand

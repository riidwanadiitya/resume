import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Header, Icon, Segment, Table, Transition } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { activeContact } from '../redux';

export class About extends Component {
    render() {
        return (
            <div>
                <Container fluid style={{ marginTop: 30, paddingLeft: 50, paddingRight: 50, paddingBottom: 170 }}>
                    <Transition animation="fade left" duration={1500} transitionOnMount>
                        <Header as='h1' style={{ color: "white" }}>About</Header>
                    </Transition>
                    <Transition animation='fade down' duration={1500} transitionOnMount>
                        <Segment placeholder>
                            <Grid columns={2} stackable textAlign='center'>
                                <Grid.Column >
                                    <Header as="h1">Personal Info</Header>
                                    <Table basic='very' celled >
                                        <Table.Row>
                                            <Table.Cell>Full Name</Table.Cell>
                                            <Table.Cell style={{ fontWeight: 'bold' }}>Ridwan Aditya Saputra</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Called Name</Table.Cell>
                                            <Table.Cell style={{ fontWeight: 'bold' }}>Ridwan</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Birthday</Table.Cell>
                                            <Table.Cell style={{ fontWeight: 'bold' }}>July, 25th 1996</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Nationality</Table.Cell>
                                            <Table.Cell style={{ fontWeight: 'bold' }}>Indonesian</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Phone</Table.Cell>
                                            <Table.Cell style={{ fontWeight: 'bold' }}>+62 896-3924-7810</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Email</Table.Cell>
                                            <Table.Cell style={{ fontWeight: 'bold' }}>riidwanadiitya@gmail.com</Table.Cell>
                                        </Table.Row>
                                    </Table>

                                </Grid.Column>
                                <Grid.Column textAlign="center" style={{ marginTop: 100 }}>
                                    <Button animated>
                                        <Button.Content visible>Click Me to Download</Button.Content>
                                        <Button.Content hidden><a href="https://drive.google.com/file/d/1f46juAQkFB_SLV1F8cjjJ4h7b9XoRxRZ/view" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Download Now </a></Button.Content>
                                    </Button><br /><br />
                                    <Button animated
                                        onClick={this.props.activePage}>
                                        <Button.Content visible>Hire Me</Button.Content>
                                        <Button.Content hidden as={Link} to='/contact' style={{ color: 'black' }}>Now <Icon name='arrow right' /> </Button.Content>
                                    </Button>
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </Transition>
                </Container>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        navActive: state.navigation.activePage,
    }
};

function mapDispatchToProps(dispatch) {
    return {
        activePage: (e) => dispatch(activeContact()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
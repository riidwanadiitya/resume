import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Grid, Header, Icon, Table } from 'semantic-ui-react'

export class About extends Component {
    render() {
        return (
            <div>
                <Container style={{ marginTop: 30, paddingLeft: 50, paddingRight: 50, paddingBottom: 170 }}>
                    <Grid>
                        <Grid.Column width={6} textAlign='center'>
                            <Header as="h1">Personal Info</Header>
                            <Table basic='very' celled style={{ marginLeft: 100 }}>
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
                                    <Table.Cell style={{ fontWeight: 'bold' }}>+62 857-1889-5449</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Email</Table.Cell>
                                    <Table.Cell style={{ fontWeight: 'bold' }}>riidwanadiitya@gmail.com</Table.Cell>
                                </Table.Row>
                            </Table>

                        </Grid.Column>
                        <Grid.Column width={7} textAlign="center" style={{ marginTop: 100 }}>
                            <Button animated>
                                <Button.Content visible>Click Me to Download</Button.Content>
                                <Button.Content hidden><a href="https://drive.google.com/file/d/15-VjTEpJTGEYIdz3pdJSaPErmfwjBIg0/view" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>Download Now </a></Button.Content>
                            </Button><br /><br />
                            <Button animated>
                                <Button.Content visible>Hire Me</Button.Content>
                                <Button.Content hidden as={Link} to='/contact' style={{ color: 'black' }}>Now <Icon name='arrow right' /> </Button.Content>
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div >
        )
    }
}

export default About

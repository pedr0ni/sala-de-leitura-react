import React from 'react'
import { Button, Card, Divider, Dropdown, Form, Grid, Header, Icon, Image, Input, Label, Menu, Segment, Table } from 'semantic-ui-react'

import SchoolImage from '../assets/img/school.png'

export default function Students() {
    return (
        <div>
            <Menu stackable secondary>
                <Menu.Item>
                    <Button primary icon="add" />
                </Menu.Item>

                <Menu.Item>
                <Dropdown text='Filtrar' icon='filter' floating labeled button className='icon'>
                    <Dropdown.Menu>
                        <Dropdown.Menu scrolling>
                            
                            <Dropdown.Item text="Adicionados recentemente" icon="clock" />
                            <Dropdown.Item text="Deletados" icon="trash" />
                            
                        </Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>
                </Menu.Item>

                <Menu.Item position='right'>
                <Input
                    action={{ type: 'submit', content: 'Buscar' }}
                    placeholder='Buscar aluno...'
                />
                </Menu.Item>
            </Menu>
            <div>
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>RA</Table.HeaderCell>
                    <Table.HeaderCell>Nome Completo</Table.HeaderCell>
                    <Table.HeaderCell>Total Alugados</Table.HeaderCell>
                    <Table.HeaderCell>Último Aluguel</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>18079020</Table.Cell>
                        <Table.Cell>Matheus Pedroni</Table.Cell>
                        <Table.Cell>5</Table.Cell>
                        <Table.Cell>12/01/2021</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Button.Group>
                                <Button icon>
                                    <Icon name='edit' />
                                </Button>
                                <Button icon>
                                    <Icon name='history' />
                                </Button>
                                <Button icon>
                                    <Icon name='trash' />
                                </Button>
                            </Button.Group>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
            </div>
        </div>
    )
}
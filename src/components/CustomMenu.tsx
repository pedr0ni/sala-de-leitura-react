import React from 'react'
import { Container, Dropdown, Menu } from 'semantic-ui-react'

export default function CustomMenu() {
    return (
        <Menu pointing={true} secondary={true} size='large'>
            <Container>
                <Menu.Item as='a' active>
                    Painel de Controle
                </Menu.Item>
                <Menu.Item as='a'>Livros</Menu.Item>
                <Menu.Item as='a'>Filmes</Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                        <Dropdown.Item>English</Dropdown.Item>
                        <Dropdown.Item>Russian</Dropdown.Item>
                        <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
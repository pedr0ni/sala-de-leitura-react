import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Dropdown, Menu } from 'semantic-ui-react'

export default function CustomMenu() {
    const location = useLocation()
    const history = useHistory()

    return (
        <Menu pointing={true} secondary={true} size='large'>
            <Container>
                <Menu.Item onClick={() => history.push("/")} as='a' active={location.pathname === "/"}>Painel de Controle</Menu.Item>
                <Menu.Item onClick={() => history.push("/library")} as='a' active={location.pathname === "/library"}>Biblioteca</Menu.Item>
                <Menu.Item onClick={() => history.push("/school")} active={location.pathname === "/school"} as='a'>Escola</Menu.Item>
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
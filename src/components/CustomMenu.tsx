import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Container, Divider, Dropdown, Menu } from 'semantic-ui-react'

import Logo from '../assets/img/logo.png'
import Router, { RouterType } from '../utils/Router'

export default function CustomMenu() {
    const location = useLocation()
    const history = useHistory()

    const handleClick = (entry: RouterType) => {
        if (entry.onClick) 
            entry.onClick()
        else
            history.push(entry.path)
    }

    return (
        <div>
            <Menu className="special-menu" secondary={true}>
                <Container>
                    <Menu.Item>
                        <img alt="Logo" className="image-logo" src={Logo} />
                    </Menu.Item>
                    
                    {
                        Router.filter(r => !r.dropdown).map((entry, key) => {
                            return (
                                <Menu.Item 
                                key={key} 
                                onClick={() => history.push(entry.path)} 
                                as='a' 
                                active={location.pathname === entry.path}>
                                    { entry.title }
                                </Menu.Item>
                            )
                        })
                    }

                    <Menu.Menu position='right'>
                        <Dropdown item text='Matheus Pedroni'>
                            <Dropdown.Menu>
                                <Dropdown.Header icon='home' content='Escola Teste' />
                                {
                                    Router.filter(r => r.dropdown).map((entry, key) => {
                                        return (
                                            <Dropdown.Item 
                                            onClick={() => handleClick(entry)} 
                                            key={key}>
                                                { entry.title }
                                            </Dropdown.Item>
                                        )
                                    })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Container>
            </Menu>

            <Divider className="special-divider" />
        </div>
    )
}
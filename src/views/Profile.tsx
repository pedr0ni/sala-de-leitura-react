import React from 'react'
import { Card, Icon, Image, Menu } from 'semantic-ui-react'
import { SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic'

import UserPlaceholder from '../assets/img/user-placeholder.png'
import { MySchool, MyUsers, Membership } from '../components/ProfileTabs'

interface Tab {
    id: string,
    title: string,
    icon: SemanticICONS,
    component: JSX.Element
}

const tabs: Tab[] = [
    {
        id: 'my-school',
        title: 'Minha Escola',
        icon: 'home',
        component: <MySchool />
    },
    {
        id: 'users',
        title: 'Usuários',
        icon: 'users',
        component: <MyUsers />
    },
    {
        id: 'membership',
        title: 'Assinatura',
        icon: 'payment',
        component: <Membership />
    }
]

export default function Profile() {
    const [currentTab, setCurrentTab] = React.useState('my-school')

    console.log(currentTab)

    return (
        <div className="profile-grid">
            <div className="profile-row">
                <Card className="profile-card">
                    <Image src={UserPlaceholder} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Matheus Pedroni</Card.Header>
                        <Card.Meta>
                            Escola Teste
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name="globe"/>
                        Administrador
                    </Card.Content>
                </Card>

                <Menu className="profile-menu" vertical>
                    <Menu.Item onClick={() => setCurrentTab('my-school')} active={currentTab == 'my-school'}>
                        <Icon name="home" />
                        Minha Escola
                    </Menu.Item>

                    <Menu.Item onClick={() => setCurrentTab('users')} active={currentTab == 'users'}>
                        <Icon name="users" />
                        Usuários
                    </Menu.Item>

                    <Menu.Item onClick={() => setCurrentTab('membership')} active={currentTab == 'membership'}>
                        <Icon name="payment" />
                        Assinatura
                    </Menu.Item>
                </Menu>
            </div>
            
            <div className="profile-row profile-100">
                {
                    tabs.map((entry ,key) => {
                        // TODO
                    })
                }
            </div>
        </div>
    )
}
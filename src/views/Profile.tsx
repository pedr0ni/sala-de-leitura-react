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
                    {
                        tabs.map((entry, key) => {
                            return (
                                <Menu.Item onClick={() => setCurrentTab(entry.id)} active={currentTab === entry.id}>
                                    <Icon name={entry.icon} />
                                    { entry.title }
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
            
            <div className="profile-row profile-100">
                {
                    tabs.filter(tab => currentTab === tab.id).map((entry, key) => {
                        return entry.component
                    })
                }
            </div>
        </div>
    )
}
import React from 'react'
import { Card, Dimmer, Icon, Loader, Menu } from 'semantic-ui-react'
import { ProfileTabType } from '../models/ProfileInterface'
import MySchool from '../components/profile/MySchool'
import MyUsers from '../components/profile/MyUsers'
import { Membership } from '../components/profile/Membership'
import { Invoices } from '../components/profile/Invoices'
import StorageManager from '../firebase/StorageManager'
import Account from '../models/Account'
import AccountService from '../service/AccountService'

const tabs: ProfileTabType[] = [
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
    },
    {
        id: 'invoices',
        title: 'Faturas',
        icon: 'dollar sign',
        component: <Invoices />
    }
]

export default function Profile() {
    const [currentTab, setCurrentTab] = React.useState('my-school')
    const [account, setAccount] = React.useState<Account>()
    const [image, setImage] = React.useState('')
    const [loadingImage, setLoadingImage] = React.useState(false)

    const loadData = async () => {
        const response = await AccountService.myAccount()

        const image = await StorageManager.findImage(response.data.image!)

        setImage(image)
        setAccount(response.data)
    }

    const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoadingImage(true)

        let formData = new FormData()
        formData.append("image", e.target.files![0])

        AccountService.changeImage(formData).then(async response => {
            const image = await StorageManager.findImage(response.data.image!)
            setImage(image)
        }).catch(error => {
            console.error(error)
        }).then(() => setLoadingImage(false))
    }

    React.useEffect(() => {
        loadData()
    }, [])

    return (
        <div className="profile-grid">
            <div className="profile-row">
                <Card className="profile-card">
                    <div className="image profile-image-form">
                        {
                            loadingImage ? (
                                <Dimmer active>
                                    <Loader />
                                </Dimmer>
                            ) : <></>
                        }
                        <input accept=".png,.jpg,.jpeg" multiple={false} onChange={changeImage} type="file" />
                        <img alt="Profile" src={image} />
                    </div>
                    <Card.Content>
                        <Card.Header>{ account?.name }</Card.Header>
                        <Card.Meta>
                            { account?.school?.name }
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
                                <Menu.Item key={key} onClick={() => setCurrentTab(entry.id)} active={currentTab === entry.id}>
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
                        return (
                            <div key={key}>
                                { entry.component }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
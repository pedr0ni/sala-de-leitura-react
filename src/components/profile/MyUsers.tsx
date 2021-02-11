import React from 'react'
import { Button, Dimmer, Divider, Header, Icon, Loader, Segment, Table } from 'semantic-ui-react'
import Account from '../../models/Account'
import SchoolService from '../../service/SchoolService'

export default function MyUsers() {
    const [loading, setLoading] = React.useState(false)
    const [accounts, setAccounts] = React.useState<Account[]>([])

    const loadData = async () => {
        setLoading(true)

        SchoolService.allAccounts().then(response => {
            setAccounts(response.data)
        }).catch(error => {
            console.error(error)
        }).then(() => setLoading(false))
    }

    React.useEffect(() => {
        loadData()
    }, [])

    return (
        <Segment secondary className="profile-segment">
            <Dimmer active={loading}>
                <Loader />
            </Dimmer>
            <Header as='h2'>
                <Icon name='users' />
                <Header.Content>Usuários do Sistema</Header.Content>
            </Header>
            <Divider />
            <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>#ID</Table.HeaderCell>
                    <Table.HeaderCell>Nome Completo</Table.HeaderCell>
                    <Table.HeaderCell>Telefone de Contato</Table.HeaderCell>
                    <Table.HeaderCell>Último Acesso</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        accounts.map((entry, key) => {
                            return (
                                <Table.Row key={key}>
                                    <Table.Cell>{ entry._id }</Table.Cell>
                                    <Table.Cell>{ entry.name }</Table.Cell>
                                    <Table.Cell>{ entry.phone }</Table.Cell>
                                    <Table.Cell>{ entry.lastLogin }</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Button.Group>
                                            <Button icon>
                                                <Icon name='edit' />
                                            </Button>
                                            <Button icon>
                                                <Icon name='trash' />
                                            </Button>
                                        </Button.Group>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5'>
                        <Button
                            floated='right'
                            icon
                            labelPosition='left'
                            primary
                            size='small'
                        >
                            <Icon name='user' /> Adicionar Usuário
                        </Button>

                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Segment>
    )
}
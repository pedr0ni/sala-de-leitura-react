import React from 'react'
import { Button, Dimmer, Divider, Form, Header, Icon, Input, Loader, Segment, Select, Table } from 'semantic-ui-react'
import Account from '../models/Account'
import { Invoice } from '../models/Invoice'
import { PaymentOptionsType } from '../models/ProfileInterface'
import { School } from '../models/School'
import AccountService from '../service/AccountService'
import InvoiceService from '../service/InvoiceService'
import SchoolService from '../service/SchoolService'

const paymentOptions: PaymentOptionsType[] = [
    {
        key: 'bank-slip',
        value: 'bank-slip',
        text: 'Boleto'
    },
    {
        key: 'credit-card',
        value: 'credit-card',
        text: 'Cartão de Crédito'
    }
]

export function MySchool() {
    const [school, setSchool] = React.useState<School>()
    const [loading, setLoading] = React.useState(false)

    const loadData = async () => {
        setLoading(true)
        SchoolService.byAccount().then(response => {
            setSchool(response.data)
        }).catch(error => {

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
                <Icon name='home' />
                <Header.Content>Minha Escola</Header.Content>
            </Header>
            <Divider />
            <Form>
                <Form.Field>
                    <label>Nome da Escola</label>
                    <input placeholder='Escola Teste' value={school?.name} />
                </Form.Field>
                <Form.Field>
                    <label>Endereço</label>
                    <input placeholder='Rua Steve Jobs, 123' value={school?.location} />
                </Form.Field>
                <Form.Field>
                    <label>CEP</label>
                    <input placeholder='13202-500' value={school?.cep} />
                </Form.Field>
                <Form.Field>
                    <label>Telefone de Contato</label>
                    <input placeholder='(11) 94141-7750' value={school?.phone} />
                </Form.Field>
                <Form.Field>
                    <label>Site</label>
                    <input placeholder='https://mpedroni.com.br' value={school?.website} />
                </Form.Field>
                <Button secondary>Salvar</Button>
            </Form>
        </Segment>
    )
}

export function MyUsers() {
    const [loading, setLoading] = React.useState(false)
    const [accounts, setAccounts] = React.useState<Account[]>([])

    const loadData = async () => {
        setLoading(true)

        SchoolService.allAccounts().then(response => {
            setAccounts(response.data)
        }).catch(error => {

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

export function Membership() {
    const [loading, setLoading] = React.useState(false)
    const [buttonLoading, setButtonLoading] = React.useState(false)
    const [account, setAccount] = React.useState<Account>()

    const loadData = async () => {
        setLoading(true)

        AccountService.myAccount().then(response => {
            setAccount(response.data)
        }).catch(error => {

        }).then(() => setLoading(false))
    }

    const saveData = () => {
        setButtonLoading(true)
        console.log(account)
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
                <Icon name='payment' />
                <Header.Content>Assinatura</Header.Content>
            </Header>
            <Divider />

            <Form>
                <Form.Field>
                    <label>Nome Completo</label>
                    <input onChange={(e) => setAccount({...account, name: e.target.value})} placeholder='Matheus Pedroni' value={account?.name} />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Field>
                        <label>Telefone de Contato</label>
                        <input onChange={(e) => setAccount({...account, phone: e.target.value})} placeholder='(11) 94141-7750' value={account?.phone} />
                    </Form.Field>
                    <Form.Field>
                        <label>Data de Nacimento</label>
                        <input onChange={(e) => setAccount({...account, birth: e.target.value})} placeholder='18/11/1999' value={account?.birth} />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Forma de Pagamento</label>
                    <Select onChange={(e, data) => setAccount({...account, membership: {...account?.membership, paymentMethod: data.value?.toString()}})} placeholder='Escolha uma opção' options={paymentOptions} value={account?.membership?.paymentMethod} />
                </Form.Field>
                {
                    account?.membership?.paymentMethod === 'credit-card' ? (
                        <div>
                            <Form.Field>
                                <label>Número do Cartão</label>
                                <Input onChange={(e) => setAccount({...account, membership: {...account.membership, creditCard: e.target.value}})} value={account?.membership?.creditCard} icon='credit card' iconPosition='left' placeholder='XXXX XXXX XXXX XXXX' />
                            </Form.Field>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <label>Data de Validade</label>
                                    <Input onChange={(e) => setAccount({...account, membership: {...account.membership, validUntil: e.target.value}})} value={account?.membership?.validUntil} icon='calendar alternate outline' iconPosition='left' placeholder='mês/ano' />
                                </Form.Field>
                                <Form.Field>
                                    <label>CCV</label>
                                    <Input onChange={(e) => setAccount({...account, membership: {...account.membership, ccv: e.target.value}})} value={account?.membership?.ccv} icon='checkmark' iconPosition='left' placeholder='XXXX' />
                                </Form.Field>
                            </Form.Group>
                        </div>
                    ) : <></>
                }
                <Button onClick={saveData} loading={buttonLoading} secondary>Salvar</Button>
            </Form>
            
        </Segment>
    )
}

export function Invoices() {
    const [loading, setLoading] = React.useState(false)
    const [invoices, setInvoices] = React.useState<Invoice[]>([])

    const loadData = async () => {
        InvoiceService.byAccount().then(response => {
            setInvoices(response.data)
            console.log(response.data)
        }).catch(error => {

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
                <Icon name='dollar sign' />
                <Header.Content>Faturas</Header.Content>
            </Header>
            <Divider />

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#ID</Table.HeaderCell>
                        <Table.HeaderCell>Subtotal</Table.HeaderCell>
                        <Table.HeaderCell>Desconto</Table.HeaderCell>
                        <Table.HeaderCell>Valor Total</Table.HeaderCell>
                        <Table.HeaderCell>Data de Vencimento</Table.HeaderCell>
                        <Table.HeaderCell>Pagamento</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        invoices.map((entry, key) => {
                            return (
                                <Table.Row key={key}>
                                    <Table.Cell>{ entry._id?.substring(0, 8) }</Table.Cell>
                                    <Table.Cell>R$ { entry.subtotal }</Table.Cell>
                                    <Table.Cell>{ entry.discount }%</Table.Cell>
                                    <Table.Cell>R$ { entry.total }</Table.Cell>
                                    <Table.Cell>{ entry.validUntil }</Table.Cell>
                                    <Table.Cell textAlign="center">
                                        <Icon color='green' name='checkmark' size='large' />
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
            
        </Segment>
    )
}
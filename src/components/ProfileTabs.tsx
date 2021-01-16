import React from 'react'
import { Button, Divider, Form, Header, Icon, Input, Segment, Select, Table } from 'semantic-ui-react'
import { PaymentOptionsType } from '../models/ProfileInterface'

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
    return (
        <Segment secondary className="profile-segment">
            <Header as='h2'>
                <Icon name='home' />
                <Header.Content>Minha Escola</Header.Content>
            </Header>
            <Divider />
            <Form>
                <Form.Field>
                    <label>Nome da Escola</label>
                    <input placeholder='Escola Teste' />
                </Form.Field>
                <Form.Field>
                    <label>Endereço</label>
                    <input placeholder='Rua Steve Jobs, 123' />
                </Form.Field>
                <Form.Field>
                    <label>CEP</label>
                    <input placeholder='13202-500' />
                </Form.Field>
                <Form.Field>
                    <label>Telefone de Contato</label>
                    <input placeholder='(11) 94141-7750' />
                </Form.Field>
                <Form.Field>
                    <label>Site</label>
                    <input placeholder='https://mpedroni.com.br' />
                </Form.Field>
                <Button secondary>Salvar</Button>
            </Form>
        </Segment>
    )
}

export function MyUsers() {
    return (
        <Segment secondary className="profile-segment">
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
                    <Table.Row>
                        <Table.Cell>97e478be2911</Table.Cell>
                        <Table.Cell>Matheus Pedroni</Table.Cell>
                        <Table.Cell>(11) 94141-7750</Table.Cell>
                        <Table.Cell>12/01/2021 07:50</Table.Cell>
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
    return (
        <Segment secondary className="profile-segment">
            <Header as='h2'>
                <Icon name='payment' />
                <Header.Content>Assinatura</Header.Content>
            </Header>
            <Divider />

            <Form>
                <Form.Field>
                    <label>Nome Completo</label>
                    <input placeholder='Escola Teste' />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Field>
                        <label>Telefone de Contato</label>
                        <input placeholder='(11) 94141-7750' />
                    </Form.Field>
                    <Form.Field>
                        <label>Data de Nacimento</label>
                        <input placeholder='18/11/1999' />
                    </Form.Field>
                </Form.Group>
                <Form.Field>
                    <label>Forma de Pagamento</label>
                    <Select placeholder='Escolha uma opção' options={paymentOptions} />
                </Form.Field>
                <Form.Field>
                    <label>Número do Cartão</label>
                    <Input icon='credit card' iconPosition='left' placeholder='XXXX XXXX XXXX XXXX' />
                </Form.Field>
                <Form.Group widths="equal">
                    <Form.Field>
                        <label>Data de Validade</label>
                        <Input icon='calendar alternate outline' iconPosition='left' placeholder='mês/ano' />
                    </Form.Field>
                    <Form.Field>
                        <label>CCV</label>
                        <Input icon='checkmark' iconPosition='left' placeholder='XXXX' />
                    </Form.Field>
                </Form.Group>
                <Button secondary>Salvar</Button>
            </Form>
            
        </Segment>
    )
}

export function Invoices() {
    return (
        <Segment secondary className="profile-segment">
            <Header as='h2'>
                <Icon name='dollar sign' />
                <Header.Content>Faturas</Header.Content>
            </Header>
            <Divider />

            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>#ID</Table.HeaderCell>
                        <Table.HeaderCell>Valor</Table.HeaderCell>
                        <Table.HeaderCell>Data de Vencimento</Table.HeaderCell>
                        <Table.HeaderCell>Pagamento</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>97e478be2911</Table.Cell>
                        <Table.Cell>R$ 19,90</Table.Cell>
                        <Table.Cell>20/01/2021</Table.Cell>
                        <Table.Cell textAlign="center">
                            <Icon color='green' name='checkmark' size='large' />
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            
        </Segment>
    )
}
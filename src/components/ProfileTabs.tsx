import React from 'react'
import { Button, Divider, Form, Header, Icon, Segment } from 'semantic-ui-react'

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
            
        </Segment>
    )
}
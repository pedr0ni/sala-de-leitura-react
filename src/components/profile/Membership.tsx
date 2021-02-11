import React from 'react'
import { Button, Dimmer, Divider, Form, Header, Icon, Input, Loader, Segment, Select } from 'semantic-ui-react'
import Account from '../../models/Account'
import { PaymentOptionsType } from "../../models/ProfileInterface"
import AccountService from '../../service/AccountService'

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

export function Membership() {
    const [loading, setLoading] = React.useState(false)
    const [buttonLoading, setButtonLoading] = React.useState(false)
    const [account, setAccount] = React.useState<Account>()

    const loadData = async () => {
        setLoading(true)

        AccountService.myAccount().then(response => {
            setAccount(response.data)
        }).catch(error => {
            console.error(error)
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
import React from 'react'
import { Dimmer, Divider, Header, Icon, Loader, Segment, Table } from 'semantic-ui-react'
import { Invoice } from '../../models/Invoice'
import InvoiceService from '../../service/InvoiceService'

export function Invoices() {
    const [loading, setLoading] = React.useState(false)
    const [invoices, setInvoices] = React.useState<Invoice[]>([])

    const loadData = async () => {
        InvoiceService.byAccount().then(response => {
            setInvoices(response.data)
            console.log(response.data)
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
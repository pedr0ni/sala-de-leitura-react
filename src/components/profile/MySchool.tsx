import React from 'react'
import { Button, Dimmer, Divider, Form, Header, Icon, Loader, Segment } from 'semantic-ui-react'
import School from '../../models/School'
import SchoolService from '../../service/SchoolService'

export default function MySchool() {
    const [school, setSchool] = React.useState<School>()
    const [loading, setLoading] = React.useState(false)
    const [buttonLoading, setButtonLoading] = React.useState(false)

    const loadData = async () => {
        setLoading(true)
        SchoolService.fetchByAccount().then(response => {
            setSchool(response.data)
        }).catch(error => {

        }).then(() => setLoading(false))
    }

    const saveData = () => {
        setButtonLoading(true)
        console.log(school)
        SchoolService.updateByAccount(school!).then(response => {
            console.log('School successfuly updated :)')
        }).catch(error => {
            console.error(error)
        }).then(() => setButtonLoading(false))
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
                    <input onChange={(e) => setSchool({...school, name: e.target.value})} placeholder='Escola Teste' value={school?.name} />
                </Form.Field>
                <Form.Field>
                    <label>Endereço</label>
                    <input onChange={(e) => setSchool({...school, location: e.target.value})} placeholder='Rua Steve Jobs, 123' value={school?.location} />
                </Form.Field>
                <Form.Field>
                    <label>CEP</label>
                    <input onChange={(e) => setSchool({...school, cep: e.target.value})} placeholder='13202-500' value={school?.cep} />
                </Form.Field>
                <Form.Field>
                    <label>Telefone de Contato</label>
                    <input onChange={(e) => setSchool({...school, phone: e.target.value})} placeholder='(11) 94141-7750' value={school?.phone} />
                </Form.Field>
                <Form.Field>
                    <label>Site</label>
                    <input onChange={(e) => setSchool({...school, website: e.target.value})} placeholder='https://mpedroni.com.br' value={school?.website} />
                </Form.Field>
                <Button loading={buttonLoading} onClick={saveData} secondary>Salvar</Button>
            </Form>
        </Segment>
    )
}
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

import Logo from '../../assets/img/logo.png'
import Account from '../../models/Account'
import AccountService from '../../service/AccountService'

export default function Login() {
    const history = useHistory()
    const [account, setAccount] = React.useState<Account>({
        email: '',
        password: ''
    })
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState()

    const login = async () => {
        console.log(account)
        setLoading(true)

        AccountService.authenticate(account).then(response => {
            AccountService.setToken(response.data.token)
            history.push('/')
        }).catch(error => {
            setError(error.response.data.message)
        }).then(() => {
            setLoading(false)
        })
    }

    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image className="logo-full" src={Logo} />
            </Header>
            {
                error ? (
                    <Message error>
                        { error }
                    </Message>
                ) : <></>
            }
            <Form size='large'>
                <Segment secondary>
                    <Form.Input 
                        onChange={(e) => setAccount({...account, email: e.target.value})} 
                        fluid icon='user' 
                        iconPosition='left' 
                        placeholder='E-mail' />
                    
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Senha'
                        type='password'
                        onChange={(e) => setAccount({...account, password: e.target.value})}
                    />

                    <Button loading={loading} color='teal' fluid size='large' onClick={login}>
                        Entrar
                    </Button>
                </Segment>
            </Form>
            <Message>
                Não possui uma conta? <Link to={{pathname: '/auth/register'}}>Registre-se</Link>
            </Message>
            </Grid.Column>
        </Grid>
    )
}
import React from 'react'
import { Button, Card, Divider, Form, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react'

import SchoolImage from '../assets/img/school.png'

export default function School() {
    return (
        <div>
            <Segment>
                <Header><Image src={SchoolImage} size="small"/> Minha Escola</Header>
                
                <Divider />
                <Form>
                    
                </Form>
            </Segment>
        </div>
    )
}
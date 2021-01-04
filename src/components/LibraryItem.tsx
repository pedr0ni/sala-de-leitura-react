import React from 'react'
import { Button, Card, Icon, Image } from 'semantic-ui-react'

import Bookcase from '../assets/img/pequeno-principe-3.png'
import Item from '../models/Item'

export interface LibraryItemProps extends Item {
    onEdit?: () => void
}

const LibraryItem: React.FC<LibraryItemProps> = ({title, author, pages, type, onEdit}) => {
    return (
        <Card>
            <Image src={Bookcase} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{ title }</Card.Header>
                <Card.Meta>
                    <span className='date'>{ pages } páginas</span>
                </Card.Meta>
                <Card.Description>
                    { author }
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='book' />
                { type }
            </Card.Content>
            <Card.Content extra>
                <Button.Group fluid>
                    <Button onClick={onEdit}>Editar</Button>
                    <Button.Or text="ou" />
                    <Button positive>Alugar</Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default LibraryItem
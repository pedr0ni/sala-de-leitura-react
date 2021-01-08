import React, { useState } from 'react'
import { Button, Dropdown, Form, Grid, Input, Menu, Modal, Select } from 'semantic-ui-react'
import LibraryItem from '../components/LibraryItem'
import Item from '../models/Item'

const mockItem: Array<Item> = [
    {
        title: 'O pequeno príncipe',
        author: 'Antoine de Saint-Exupéry',
        type: 'book',
        pages: 116
    }
]

const bookOptions = [{key: 'book', value:'book',text: 'Livro'}, {key: 'movie', value: 'movie', text: 'Filme'}]

export default function Library() {
    const [modalOpen, setModalOpen] = useState(false)
    const [editItem, setEditItem] = useState<Item>()

    const openEditing = (item: Item) => {
        setEditItem(item)
        setModalOpen(true)
    }

    const closeEditing = () => {
        setEditItem(undefined)
        setModalOpen(false)
    }

    return (
        <div>
            <Modal onClose={() => closeEditing()} onOpen={() => setModalOpen(true)} open={modalOpen}>
                {
                    editItem ? (<Modal.Header>Item do Acervo: { editItem.title }</Modal.Header>) : <Modal.Header>Adicionar item ao acervo digital</Modal.Header>
                }
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <label>Titulo</label>
                                <input onChange={e => setEditItem({...editItem, title: e.target.value})} value={editItem ? editItem.title : ""} placeholder='O pequeno príncipe' />
                            </Form.Field>
                            <Form.Field>
                                <label>Autor(es)</label>
                                <input value={editItem ? editItem.author : ""} placeholder='Antoine de Saint-Exupéry' />
                            </Form.Field>
                            <Form.Field>
                                <label>Páginas</label>
                                <input value={editItem ? editItem.pages : ""} type="number" placeholder='116' />
                            </Form.Field>
                            <Form.Field>
                                <label>Avaliação (x/5)</label>
                                <input value={editItem ? editItem.score : ""} type="number" min="0" max="5" placeholder='4.7' />
                            </Form.Field>
                            <Form.Field>
                                <label>Tipo de Item</label>
                                <Select onChange={(e, {value}) => setEditItem({...editItem, type: value?.toString()})} value={editItem ? editItem.type : ""} placeholder="Livro" options={bookOptions} />
                            </Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button color='black' onClick={() => closeEditing()}>Cancelar</Button>
                    <Button content="Salvar" labelPosition='right' icon='checkmark' onClick={() => closeEditing()} positive />
                </Modal.Actions>
            </Modal>

            <Menu stackable secondary>
                <Menu.Item>
                <Button onClick={() => setModalOpen(true)} primary icon="add" />
                </Menu.Item>

                <Menu.Item>
                <Dropdown text='Filtrar' icon='filter' floating labeled button className='icon'>
                    <Dropdown.Menu>
                        <Dropdown.Menu scrolling>
                            
                            <Dropdown.Item text="Adicionados recentemente" icon="clock" />
                            <Dropdown.Item text="Filmes" icon="video camera" />
                            <Dropdown.Item text="Livros" icon="book" />
                            <Dropdown.Item text="Deletados" icon="trash" />
                            
                        </Dropdown.Menu>
                    </Dropdown.Menu>
                </Dropdown>
                </Menu.Item>

                <Menu.Item position='right'>
                <Input
                    action={{ type: 'submit', content: 'Buscar' }}
                    placeholder='Livro, filme, autor...'
                />
                </Menu.Item>
            </Menu>
            <Grid container stackable columns={3}>
                <Grid.Column>
                    {
                        mockItem.map((entry, key) => {
                            return (
                                <LibraryItem key={key} onEdit={() => openEditing(entry)} author={entry.author} title={entry.title} pages={entry.pages} type={entry.type} />
                            )
                        })
                    }
                </Grid.Column>
            </Grid>
        </div>
    )
}
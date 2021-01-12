import React from 'react'
import { Grid, Segment, Statistic, Table } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Segment>
                <Statistic.Group widths="3">
                    <Statistic color="purple">
                        <Statistic.Value>22</Statistic.Value>
                        <Statistic.Label>Livros</Statistic.Label>
                    </Statistic>
                    <Statistic color="blue">
                        <Statistic.Value>31,200</Statistic.Value>
                        <Statistic.Label>Total Alugados</Statistic.Label>
                    </Statistic>
                    <Statistic color="violet">
                        <Statistic.Value>22</Statistic.Value>
                        <Statistic.Label>Filmes</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
            </Segment>

            <Grid columns="two">
                <Grid.Row>
                    <Grid.Column>
                        
                        <iframe title="chart-01" className="mongodb-chart" width="640" height="480" src="https://charts.mongodb.com/charts-project-0-vasyo/embed/charts?id=1fed0367-ba1d-4863-8c1d-8d8f8a2457d6&theme=light"></iframe>
                        
                    </Grid.Column>
                    <Grid.Column>
                        <Table celled striped>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell colSpan='2'>Alunos que mais alugam</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    [5, 4, 3, 2, 1].map(entry => {
                                        return (
                                            <Table.Row>
                                                <Table.Cell collapsing>Matheus Pedroni</Table.Cell>
                                                <Table.Cell collapsing textAlign='right'>{ entry }</Table.Cell>
                                            </Table.Row>
                                        )
                                    })
                                }
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
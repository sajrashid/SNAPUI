import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'



export default class DataTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            column: null,
            data: this.props.tableData,
            direction: null,
            color: this.props.color
        };

    }

    handleSort = clickedColumn => () => {
        const { column, data, direction } = this.state

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const { column, data, direction } = this.state

        return (
            <Table color={this.props.color} key={this.props.key} inverted={this.props.inverted}  sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'name' ? direction : null}
                            onClick={this.handleSort('name')}
                        >
                            Name
            </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'age' ? direction : null}
                            onClick={this.handleSort('age')}
                        >
                            Age
            </Table.HeaderCell>
                        <Table.HeaderCell
                            sorted={column === 'gender' ? direction : null}
                            onClick={this.handleSort('gender')}
                        >
                            Gender
            </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {_.map(data, ({ age, gender, name }) => (
                        <Table.Row key={name}>
                            <Table.Cell>{name}</Table.Cell>
                            <Table.Cell>{age}</Table.Cell>
                            <Table.Cell>{gender}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )
    }
}
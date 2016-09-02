
import { Component } from 'react'

import { Table } from '..'

export class TableExample extends Component {

  render() {
    const dataSource = [{
      name: 'haoxin',
      age: 18,
      address: 'Shanghai'
    }, {
      name: 'luqiang',
      age: 22,
      address: 'Hangzhou'
    }]

    const columns = [{
      title: 'name',
      dataIndex: 'name',
    }, {
      title: 'age',
      dataIndex: 'age',
    }, {
      title: 'address',
      dataIndex: 'address',
      key: 'address'
    }]

    return (
      <Table dataSource={dataSource} columns={columns} />
    )
  }
}

export class TableExampleRender extends Component {

  render() {
    const dataSource = [{
      name: 'haoxin',
      age: 18,
      address: 'Shanghai'
    }, {
      name: 'luqiang',
      age: 22,
      address: 'Hangzhou'
    }]

    const columns = [{
      title: 'name',
      dataIndex: 'name',
      render: name => <a href='#'>{name}</a>
    }, {
      title: 'age',
      dataIndex: 'age'
    }, {
      title: 'address',
      dataIndex: 'address',
      render(address, record) {
        return (
          <strong>{address + '. ' + record.name}</strong>
        )
      }
    }]

    return (
      <Table dataSource={dataSource} columns={columns} />
    )
  }
}

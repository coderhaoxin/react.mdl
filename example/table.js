
import { render } from 'react-dom'
import { Component } from 'react'

import { Table } from '..'

class TableExample extends Component {

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

export default TableExample

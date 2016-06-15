
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

import Head from './head'
import Body from './body'

const baseClasses = {
  'mdl-data-table': true,
  'mdl-js-data-table': true
}

class Table extends Component {

  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    className: PropTypes.string,
    selectable: PropTypes.bool
  }

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialDataTable')
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  render() {
    const {
      selectable,
      dataSource,
      className,
      columns
    } = this.props

    const classes = classnames(baseClasses, {
      'mdl-data-table--selectable': selectable
    }, className)

    const headColumns = columns.map(c => ({
      title: c.title,
      key: c.key || c.dataIndex
    }))

    const saveRef = element => this._element = element

    return (
      <table ref={saveRef} className={classes}>
        <Head columns={headColumns} />
        <Body columns={columns} rows={dataSource} />
      </table>
    )
  }
}

export default Table

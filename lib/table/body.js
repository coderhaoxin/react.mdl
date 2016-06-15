
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Body extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
  }

  getColumn(row, col) {
    const classes = classnames({
      'mdl-data-table__cell--non-numeric': !!col.numeric
    })

    const render = col.render || defaultRender

    return (
      <td key={col.key || col.dataIndex} className={classes}>
      {
        render(row[col.dataIndex], row)
      }
      </td>
    )
  }

  getRow(row, key) {
    const { columns } = this.props

    return (
      <tr key={key}>
      {
        columns.map(col => this.getColumn(row, col))
      }
      </tr>
    )
  }

  render() {
    const {
      className,
      numeric,
      columns,
      rows
    } = this.props

    return (
      <tbody>
      {
        rows.map((r, i) => this.getRow(r, i))
      }
      </tbody>
    )
  }
}

export default Body

/**
 * private
 */

function defaultRender(v) {
  return v
}

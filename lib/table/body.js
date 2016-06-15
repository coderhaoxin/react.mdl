
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Body extends Component {
  static propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
  }

  getRow(row, key) {
    const { columns } = this.props

    return (
      <tr key={key}>
      {
        columns.map(col => {
          const classes = classnames({
            'mdl-data-table__cell--non-numeric': !!col.numeric
          })

          return (
            <td key={col.key || col.dataIndex} className={classes}>
              {
                row[col.dataIndex]
              }
            </td>
          )
        })
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

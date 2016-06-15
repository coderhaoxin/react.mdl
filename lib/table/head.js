
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Head extends Component {

  static propTypes = {
    columns: PropTypes.array.isRequired,
    numeric: PropTypes.bool
  }

  render() {
    const { columns } = this.props

    return (
      <thead>
        <tr>
          {
            columns.map(c => {
              const classes = classnames({
                'mdl-data-table__cell--non-numeric': !!c.numeric
              })
              return (
                <th key={c.key} className={classes}>{c.title}</th>
              )
            })
          }
        </tr>
      </thead>
    )
  }
}

export default Head

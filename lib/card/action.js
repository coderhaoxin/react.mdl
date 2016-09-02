
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const baseClasses = {
  'mdl-card__actions': true
}

class Action extends Component {
  static propTypes = {
    border: PropTypes.bool
  }

  render() {
    const {
      children,
      border
    } = this.props

    const classes = classnames(baseClasses, {
      'mdl-card--border': border
    })

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

export default Action

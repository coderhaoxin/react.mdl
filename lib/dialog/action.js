
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Action extends Component {

  static propTypes = {
    className: PropTypes.string,
    fullWidth: PropTypes.bool
  }

  render() {
    const {
      className,
      fullWidth,
      children
    } = this.props

    const classes = classnames('mdl-dialog__actions', {
      'mdl-dialog__actions--full-width': fullWidth
    }, className)

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

export default Action

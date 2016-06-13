
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const baseClasses = {
  'mdl-tooltip': true
}

class Tooltip extends Component {
  static propTypes = {
    htmlFor: PropTypes.string.isRequired,
    className: PropTypes.string,
    large: PropTypes.bool
  }

  render() {
    const {
      children,
      className,
      large
    } = this.props

    const classes = classnames(baseClasses, {
      'mdl-tooltip--large': large
    }, className)

    return (
      <span {...this.props} className={classes}>
        {children}
      </span>
    )
  }
}

export default Tooltip

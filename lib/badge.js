
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const baseClasses = {
  'mdl-badge': true
}

class Badge extends Component {
  static propTypes = {
    className: PropTypes.string,
    background: PropTypes.bool,
    overlap: PropTypes.bool,
    href: PropTypes.string
  }

  render() {
    const {
      children,

      background = true,
      className,
      overlap
    } = this.props

    const classes = classnames(baseClasses, {
      'mdl-badge--no-background': !background,
      'mdl-badge--overlap': overlap
    }, className)

    return (
      <a {...this.props} className={classes}>
        {children}
      </a>
    )
  }
}

export default Badge

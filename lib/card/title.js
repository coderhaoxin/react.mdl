
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const baseClasses = {
  'mdl-card__title': true
}

class Title extends Component {
  static propTypes = {
    expand: PropTypes.bool
  }

  render() {
    const {
      children,
      expand
    } = this.props

    const title = typeof children === 'string' ? (
      <h2 className='mdl-card__title-text'>{children}</h2>
    ) : children

    const classes = classnames(baseClasses, {
      'mdl-card--expand': expand
    })

    return (
      <div className={classes}>
        {title}
      </div>
    )
  }
}

export default Title

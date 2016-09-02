
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const baseClasses = {
  'mdl-card': true
}

export class Card extends Component {
  static propTypes = {
    shadow: PropTypes.number
  }

  render() {
    const {
      children,
      shadow
    } = this.props

    const classes = !!shadow ? classnames(baseClasses, {
      [`mdl-shadow--${shadow}dp`]: true
    }) : classnames(baseClasses)

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

/**
 * extra
 */

export { default as CardAction } from './action'

export { default as CardTitle } from './title'

export class CardMedia extends Component {
  render() {
    const { children } = this.props

    return (
      <div className='mdl-card__media'>
        {children}
      </div>
    )
  }
}

export class CardMenu extends Component {
  render() {
    const { children } = this.props

    return (
      <div className='mdl-card__menu'>
        {children}
      </div>
    )
  }
}

export class CardText extends Component {
  render() {
    const { children } = this.props

    return (
      <div className='mdl-card__supporting-text'>
        {children}
      </div>
    )
  }
}

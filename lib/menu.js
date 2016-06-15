
import { Component, PropTypes, Children, cloneElement } from 'react'
import mdl from 'material-design-lite/material'
import { findDOMNode } from 'react-dom'
import classnames from 'classnames'

const ulBaseClasses = {
  'mdl-js-ripple-effect': true,
  'mdl-js-menu': true,
  'mdl-menu': true
}

export class MenuItem extends Component {
  render() {
    const { children } = this.props

    return (
      <li className='mdl-menu__item'>{children}</li>
    )
  }
}

export class Menu extends Component {

  static propTypes = {
    className: PropTypes.string,
    direction: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.string
  }

  static defaultProps = {
    id: Math.random().toString(36).slice(2),
    direction: 'bottom-right',
    icon: 'more_vert'
  }

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialMenu')
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  render() {
    const {
      children,

      className,
      direction,
      icon,
      id,
    } = this.props

    const classes = classnames(ulBaseClasses, {
      ['mdl-menu--' + direction]: true
    }, className)

    const saveRef = element => this._element = element

    return (
      <div>
        <button id={id} className='mdl-button mdl-js-button mdl-button--icon'>
          <i className='material-icons'>{icon}</i>
        </button>

        <ul className={classes} htmlFor={id} ref={saveRef}>
          {children}
        </ul>
      </div>
    )
  }
}

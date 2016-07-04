
import { Component, PropTypes, Children, cloneElement } from 'react'
import mdl from 'material-design-lite/material'
import { findDOMNode } from 'react-dom'
import classnames from 'classnames'

import { setDefaultId } from './util/kit'

const ulBaseClasses = {
  'mdl-js-ripple-effect': true,
  'mdl-js-menu': true,
  'mdl-menu': true
}

export class MenuItem extends Component {
  render() {
    const {
      className,
      children
    } = this.props

    return (
      <li {...this.props} className={`mdl-menu__item ${className}`}>
        {children}
      </li>
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
    direction: 'bottom-right',
    icon: 'more_vert'
  }

  state = {
    id: ''
  }

  componentWillMount() {
    this::setDefaultId()
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
    } = this.props

    const { id } = this.state

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

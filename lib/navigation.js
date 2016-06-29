
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const baseClasses = {
  'mdl-layout': true,
  'mdl-js-layout': true
}

export class NavItem extends Component {
  static propTypes = {
  }

  render() {
    const { children } = this.props

    return (
      <a className='mdl-navigation__link' href=''>
        {children}
      </a>
    )
  }
}

export class Nav extends Component {

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.bool
    ])
  }

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialLayout')
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  render() {
    const {
      children,

      className,
      title,
    } = this.props

    const classes = classnames(baseClasses, {
    }, className)

    const saveRef = element => this._element = element

    return (
      <div ref={saveRef} className={classes}>
        <div className='mdl-layout__drawer'>
          {
            !!title && (
              <span className='mdl-layout-title'>
                {title}
              </span>
            )
          }
          <nav className='mdl-navigation'>
            {children}
          </nav>
        </div>
      </div>
    )
  }
}


import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pick from 'lodash.pick'

const baseClasses = {
  'mdl-button': true,
  'mdl-js-button': true
}

class Button extends Component {

  static propTypes = {
    className: PropTypes.string,
    floating: PropTypes.bool,
    colored: PropTypes.bool,
    primary: PropTypes.bool,
    ripple: PropTypes.bool,
    raised: PropTypes.bool,
    accent: PropTypes.bool,
    icon: PropTypes.bool,
    mini: PropTypes.bool
  }

  componentDidMount() {
    const { ripple } = this.props

    const node = this._element
    mdl.upgradeElement(node, 'MaterialButton')

    if (ripple) {
      mdl.upgradeElement(node, 'MaterialRipple')
    }
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  render() {
    const {
      children,
      className,
      disabled,
      floating,
      colored,
      primary,
      ripple,
      raised,
      accent,
      icon,
      mini
    } = this.props

    const classes = classnames(baseClasses, {
      'mdl-button--mini-fab': floating && mini,
      'mdl-button--disabled': disabled,
      'mdl-js-ripple-effect': ripple,
      'mdl-button--colored': colored,
      'mdl-button--primary': primary,
      'mdl-button--raised': raised,
      'mdl-button--accent': accent,
      'mdl-button--fab': floating,
      'mdl-button--icon': icon
    }, className)

    const saveRef = element => this._element = element

    const props = pick(this.props, 'onClick')

    return (
      <button {...props} ref={saveRef} className={classes}>
        {children}
      </button>
    )
  }
}

export default Button

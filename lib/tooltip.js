
import mdl from 'material-design-lite/material'
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

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialTooltip')
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
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

    const saveRef = element => this._element = element

    return (
      <span {...this.props} ref={saveRef} className={classes}>
        {children}
      </span>
    )
  }
}

export default Tooltip

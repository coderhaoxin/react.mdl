
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const baseClasses = {
  'mdl-spinner': true,
  'mdl-js-spinner': true
}

class Spinner extends React.Component {

  static propTypes = {
    singleColor: React.PropTypes.bool,
    className: React.PropTypes.string,
    active: React.PropTypes.bool,
  }

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialSpinner')
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  render() {
    const {
      children,
      className,
      active,
      singleColor
    } = this.props

    const classes = classnames(baseClasses, {
      'mdl-spinner--single-color': singleColor,
      'is-active': active
    }, className)

    const saveRef = element => this._element = element

    return (
      <div {...this.props} ref={saveRef} className={classes}>
        {children}
      </div>
    )
  }
}

export default Spinner

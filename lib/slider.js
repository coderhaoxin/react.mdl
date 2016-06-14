
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const baseClasses = {
  'mdl-slider': true,
  'mdl-js-slider': true
}

class Slider extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialSlider')
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  render() {
    const {
      className
    } = this.props

    const classes = classnames(baseClasses, className)

    const saveRef = element => this._element = element

    return (
      <input type='range' ref={saveRef} {...this.props} className={classes} />
    )
  }
}

export default Slider

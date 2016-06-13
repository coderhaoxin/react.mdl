
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import classnames from 'classnames'

const baseClasses = {
  'mdl-progress': true,
  'mdl-js-progress': true
}

class Progress extends Component {

  static propTypes = {
    indeterminate: PropTypes.bool,
    className: PropTypes.string,
    progress: PropTypes.number,
    buffer: PropTypes.number,
  }

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialProgress')
  }

  componentWillUpdate() {
    const { progress, buffer } = this.props

    if (progress) {
      this.setProgress(progress)
    }

    if (buffer) {
      this.setBuffer(buffer)
    }
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  setProgress(progress) {
    if (!this.props.indeterminate) {
      findDOMNode(this).MaterialProgress.setProgress(progress)
    }
  }

  setBuffer(buffer) {
    findDOMNode(this).MaterialProgress.setBuffer(buffer)
  }

  render() {
    const {
      children,

      indeterminate,
      className
    } = this.props

    const classes = classnames(baseClasses, {
      'mdl-progress__indeterminate': indeterminate
    }, className)

    const saveRef = element => this._element = element

    return (
      <div {...this.props} ref={saveRef} className={classes}>
        {children}
      </div>
    )
  }
}

export default Progress

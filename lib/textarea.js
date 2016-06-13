
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const baseClasses = {
  'mdl-textfield__input': true
}

class Textarea extends Component {
  static propType = {
    className: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string
  }

  static defaultProps = {
    id: Math.random().toString(36).slice(2)
  }

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialTextfield')
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  render() {
    const {
      className,
      label,
      id
    } = this.props

    const classes = classnames(baseClasses, className)

    const saveRef = element => this._element = element

    return (
      <div ref={saveRef} className='mdl-textfield mdl-js-textfield'>
        <textarea {...this.props} type='text' className={classes}></textarea>
        <label className='mdl-textfield__label' htmlFor={id}>
          {label}
        </label>
      </div>
    )
  }
}

export default Textarea

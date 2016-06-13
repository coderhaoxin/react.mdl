
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const labelBaseClasses = {
  'mdl-switch': true,
  'mdl-js-switch': true
}

const inputBaseClasses = {
  'mdl-switch__input': true
}

class Switch extends Component {

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    ripple: PropTypes.bool,
    id: PropTypes.string
  }

  static defaultProps = {
    id: Math.random().toString(36).slice(2)
  }

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialSwitch')
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  render() {
    const {
      className,
      ripple,
      label,
      id
    } = this.props

    const labelClasses = classnames(labelBaseClasses, {
      'mdl-js-ripple-effect': ripple
    })

    const inputClasses = classnames(inputBaseClasses, className)

    let labelField
    if (label) {
      labelField = (
        <span className='mdl-switch__label'>
          {label}
        </span>
      )
    }

    const saveRef = element => this._element = element

    return (
      <label ref={saveRef} htmlFor={id} className={labelClasses}>
        <input {...this.props} id={id} type='checkbox' className={inputClasses} />
        {labelField}
      </label>
    )
  }
}

export default Switch

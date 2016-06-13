
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const labelBaseClasses = {
  'mdl-checkbox': true,
  'mdl-js-checkbox': true
}

const inputBaseClasses = {
  'mdl-checkbox__input': true
}

class Checkbox extends Component {
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
    mdl.upgradeElement(node, 'MaterialCheckbox')
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
        <span className='mdl-checkbox__label'>
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

export default Checkbox

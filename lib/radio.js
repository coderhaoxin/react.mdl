
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const labelBaseClasses = {
  'mdl-radio': true,
  'mdl-js-radio': true
}

const inputBaseClasses = {
  'mdl-radio__button': true
}

class Radio extends Component {

  static propTypes = {
    className: React.PropTypes.string,
    label: React.PropTypes.string,
    name: React.PropTypes.string,
    ripple: React.PropTypes.bool,
    id: React.PropTypes.string
  }

  static defaultProps = {
    id: Math.random().toString(36).slice(2)
  }

  componentDidMount() {
    const node = this._element
    mdl.upgradeElement(node, 'MaterialRadio')
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
      name,
      id
    } = this.props

    const labelClasses = classnames(labelBaseClasses, {
      'mdl-js-ripple-effect': ripple
    })

    const inputClasses = classnames(inputBaseClasses, className)

    let labelField
    if (label) {
      labelField = (
        <span className='mdl-radio__label'>
          {label}
        </span>
      )
    }

    const saveRef = element => this._element = element

    return (
      <label ref={saveRef} htmlFor={id} className={labelClasses}>
        <input {...this.props} id={id} type='radio' name={name} className={inputClasses} />
        {labelField}
      </label>
    )
  }
}

export default Radio

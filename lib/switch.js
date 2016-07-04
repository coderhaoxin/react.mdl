
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pick from 'lodash.pick'

import {
  setDefaultId,
  randomId
} from './util/kit'

function noop() {}

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
    id: PropTypes.string,

    onChange: PropTypes.func
  }

  static defaultProps = {
    onChange: noop
  }

  state = {
    id: ''
  }

  componentWillMount() {
    this::setDefaultId()
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

      onChange
    } = this.props

    const { id } = this.state

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

    const inputProps = pick(this.props, 'defaultChecked', 'checked')

    const saveRef = element => this._element = element

    return (
      <span className='r-mdl-switch'>
        <label ref={saveRef} htmlFor={id} className={labelClasses}>
          <input {...inputProps} id={id} type='checkbox' className={inputClasses}
            onChange={e => onChange(e.target.checked, e)} />
          {labelField}
        </label>
      </span>
    )
  }
}

export default Switch


import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pick from 'lodash.pick'

import { randomId } from './util/kit'

function noop() {}

const labelBaseClasses = {
  'mdl-radio': true,
  'mdl-js-radio': true
}

const inputBaseClasses = {
  'mdl-radio__button': true
}

class Radio extends Component {

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
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

  componentWillReceiveProps(props) {
    if (!this.state.id) {
      if (props.id) {
        this.setState({id: props.id})
      } else {
        this.setState({id: randomId()})
      }
    }
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
        <span className='mdl-radio__label'>
          {label}
        </span>
      )
    }

    const inputProps = pick(this.props, 'defaultChecked', 'checked', 'name')

    const saveRef = element => this._element = element

    return (
      <span className='r-mdl-radio'>
        <label ref={saveRef} htmlFor={id} className={labelClasses}>
          <input {...inputProps} id={id} type='radio' className={inputClasses}
            onChange={e => onChange(e.target.checked, e)} />
          {labelField}
        </label>
      </span>
    )
  }
}

export default Radio

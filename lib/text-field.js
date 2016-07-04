
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pick from 'lodash.pick'

import { setDefaultId } from './util/kit'

function noop() {}

const baseClasses = {
  'mdl-textfield': true,
  'mdl-js-textfield': true
}

class TextField extends Component {
  static propTypes = {
    className: PropTypes.string,
    expandable: PropTypes.bool,
    floating: PropTypes.bool,

    pattern: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,

    onChange: PropTypes.func,
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
    mdl.upgradeElement(node, 'MaterialTextfield')
  }

  componentWillUnmount() {
    const node = this._element
    mdl.downgradeElements(node)
  }

  render() {
    const {
      expandable,
      className,
      floating,
      pattern,
      label,
      error,

      onChange
    } = this.props

    const { id } = this.state

    const classes = classnames(baseClasses, {
      'mdl-textfield--expandable': expandable,
      'mdl-textfield--floating-label': floating
    }, className)

    const inputProps = pick(this.props, 'defaultValue', 'value')

    const saveRef = element => this._element = element

    return (
      <div ref={saveRef} className={classes}>
        <input {...inputProps} className='mdl-textfield__input'
          id={id} pattern={pattern} type='text'
          onChange={e => onChange(e.target.value, e)} />
        <span className='mdl-textfield__error'>
          {error}
        </span>
        <label htmlFor={id} className='mdl-textfield__label'>
          {label}
        </label>
      </div>
    )
  }
}

export default TextField

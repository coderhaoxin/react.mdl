
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pick from 'lodash.pick'

import { setDefaultId } from './util/kit'

function noop() {}

const baseClasses = {
  'mdl-textfield__input': true
}

class Textarea extends Component {
  static propType = {
    className: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,

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
      className,
      label,

      onChange,
    } = this.props

    const { id } = this.state

    const classes = classnames(baseClasses, className)

    const inputProps = pick(this.props, 'placeholder', 'defaultValue', 'value',
      'autoFocus', 'rows', 'cols')

    const saveRef = element => this._element = element

    return (
      <div ref={saveRef} className='mdl-textfield mdl-js-textfield'>
        <textarea {...inputProps} id={id} type='text' className={classes}
          onChange={e => onChange(e.target.value, e)}>
        </textarea>
        <label className='mdl-textfield__label' htmlFor={id}>
          {label}
        </label>
      </div>
    )
  }
}

export default Textarea

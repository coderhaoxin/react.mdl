
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pick from 'lodash.pick'

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
    id: Math.random().toString(36).slice(2),
    onChange: noop
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
      id,

      onChange,
    } = this.props

    const classes = classnames(baseClasses, className)

    const inputProps = pick(this.props, 'defaultValue', 'value', 'rows', 'cols')

    const saveRef = element => this._element = element

    return (
      <div ref={saveRef} className='mdl-textfield mdl-js-textfield'>
        <textarea {...inputProps} type='text' className={classes}
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

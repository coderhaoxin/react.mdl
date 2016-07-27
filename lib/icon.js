
import { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pick from 'lodash.pick'

class Icon extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    toggle: PropTypes.bool
  }

  render() {
    const {
      className,
      toggle,
      type
    } = this.props

    const classes = classnames({
      'mdl-icon-toggle__label': toggle,
      'material-icons': true
    }, className)

    const props = pick(this.props, 'onClick')

    return (
      <i {...props} className={classes}>
        {type}
      </i>
    )
  }
}

export default Icon

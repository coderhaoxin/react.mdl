
import { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pick from 'lodash.pick'

class TabPane extends Component {

  static propTypes = {
    active: PropTypes.bool,
    tab: PropTypes.string
  }

  render() {
    const {
      children,

      className,
      active
    } = this.props

    const classes = classnames({
      'mdl-tabs__panel': true,
      'is-active': active
    }, className)

    const props = pick(this.props, 'onClick', 'id')

    return (
      <div {...props} className={classes}>
        {children}
      </div>
    )
  }
}

export default TabPane

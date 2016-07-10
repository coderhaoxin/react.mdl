
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'
import pick from 'lodash.pick'

class TabPane extends Component {

  static propTypes = {
    active: PropTypes.bool,
    tab: ProTypes.string
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

    const props = pick(this.props, 'onClick')

    return (
      <div {...props} className={classes}>
        {children}
      </div>
    )
  }
}

export default TabPane

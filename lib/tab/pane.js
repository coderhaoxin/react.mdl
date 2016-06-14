
import mdl from 'material-design-lite/material'
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

class TabPane extends Component {

  static propTypes = {
    active: PropTypes.bool
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

    return (
      <div {...this.props} className={classes}>
        {children}
      </div>
    )
  }
}

export default TabPane

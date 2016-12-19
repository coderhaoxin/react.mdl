
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Content extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children } = this.props

    const classes = classnames('mdl-dialog__content', className)

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

export default Content

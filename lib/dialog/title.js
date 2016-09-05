
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Title extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  render() {
    const { className, children } = this.props

    const classes = classnames('mdl-dialog__title', className)

    return (
      <h4 className={classes}>
        {children}
      </h4>
    )
  }
}

export default Title

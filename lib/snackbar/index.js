
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

const baseClasses = {
  'mdl-snackbar': true
}

function noop() {}

class Snackbar extends Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    className: PropTypes.string,
    timeout: PropTypes.number,
    action: PropTypes.string,

    onActionClick: PropTypes.func
  }

  static defaultProps = {
    onActionClick: noop,
    timeout: 2750
  }

  state = {
    open: false
  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.active
    })
  }

  componentDidUpdate() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }

    if (this.props.active) {
      this.timeoutId = setTimeout(this.clearTimer, this.props.timeout)
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
      this.timeoutId = null
    }
  }

  clearTimer = () => {
    this.timeoutId = null
    this.setState({
      open: false
    })
  }

  render() {
    const {
      onActionClick,
      className,
      children,
      action,
      active,
    } = this.props

    const { open } = this.state

    const classes = classnames(baseClasses, {
      'mdl-snackbar--active': open
    }, className)

    return (
      <div className={classes} aria-hidden={!open}>
        <div className='mdl-snackbar__text'>{active && children}</div>
        {
          active && action && (
            <button className='mdl-snackbar__action' onClick={onActionClick}>
              {action}
            </button>
          )
        }
      </div>
    )
  }
}

export default Snackbar

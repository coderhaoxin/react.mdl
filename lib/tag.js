
import './tag.css'

import { Component, PropTypes } from 'react'

function noop() {}

class Tag extends Component {

  static propTypes = {
    onClose: PropTypes.func,
    color: PropTypes.string,
    name: PropTypes.string,
  }

  static defaultProps = {
    color: '#919191'
  }

  render() {
    const {
      onClose,
      color,
      name
    } = this.props

    const style = {
      backgroundColor: color
    }

    return (
      <mdl-tag style={style}>
        <label>{name}</label>
        {
          typeof onClose === 'function' && (
            <i onClick={() => onClose()}>
              ✕
            </i>
          )
        }
      </mdl-tag>
    )
  }
}

export default Tag

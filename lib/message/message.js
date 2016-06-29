
import { Component, PropTypes } from 'react'
import classnames from 'classnames'

class Message extends Component {
  static propTypes = {
    type: PropTypes.string,
    duration: PropTypes.number,
    content: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ])
  }

  render() {
    const {
      content,
      type
    } = this.props

    return (
      <message>
        <main>
          <div>
            {
              type !== 'none' && (
                <img className={type} />
              )
            }

            <span>
              {content}
            </span>
          </div>
        </main>
      </message>
    )
  }
}

export default Message
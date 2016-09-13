
import './dialog.css'

import { Component } from 'react'

import Message from './message'

class Dialog extends Component {
  state = {
    messages: []
  }

  getKey() {
    return Date.now() + '-' + Math.random().toString(36).slice(2)
  }

  show(opts) {
    const defaultKey = this.getKey()
    const msg = {
      key: defaultKey,
      duration: 3000,
      type: 'none',
      content: '',

      ...opts
    }

    const { messages } = this.state

    this.setState({
      messages: [...messages, msg]
    })

    setTimeout(() => this.hide(msg.key), msg.duration)
  }

  hide(key) {
    const { messages } = this.state

    this.setState({
      messages: messages.filter(msg => msg.key !== key)
    })
  }

  render() {
    const { messages } = this.state

    const style = {
      display: messages.length ? '' : 'none'
    }

    return (
      <mdl-msg-box style={style}>
        {
          messages.map(msg => (
            <Message {...msg} key={msg.key} />
          ))
        }
      </mdl-msg-box>
    )
  }
}

export default Dialog

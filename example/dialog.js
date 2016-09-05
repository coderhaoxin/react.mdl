
import { Component } from 'react'

import { Dialog } from '..'

class DialogExample extends Component {

  state = {
    visible1: false,
    visible2: false
  }

  onCancel = () => {
    this.setState({
      visible1: false,
      visible2: false
    })
  }

  onOk = () => {
    this.setState({
      visible1: false,
      visible2: false
    })
  }

  render() {
    const {
      visible1,
      visible2
    } = this.state

    return (
      <section>
        <button onClick={() => this.setState({visible1: true})}>
          show dialog 1
        </button>

        <Dialog title='dialog 1' visible={visible1}
          onCancel={this.onCancel} onOk={this.onOk}>
          <h2>hello</h2>
          <h3>world 1</h3>
        </Dialog>

        <button onClick={() => this.setState({visible2: true})}>
          show dialog 2
        </button>

        <Dialog title='dialog 2' visible={visible2}
          onCancel={this.onCancel} onOk={this.onOk}>
          <h2>hello</h2>
          <h3>world 2</h3>
        </Dialog>
      </section>
    )
  }
}

export default DialogExample

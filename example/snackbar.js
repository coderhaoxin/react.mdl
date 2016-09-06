
import { Component } from 'react'

import { Snackbar } from '..'

class SnackbarExample extends Component {
  state = {
    active: false
  }

  componentDidMount() {
    setInterval(() => {
      const { active } = this.state

      this.setState({
        active: !active
      })
    }, 5000)
  }

  render() {
    const { active } = this.state

    return (
      <div>
        <Snackbar action='goto' active={active}
          onActionClick={() => console.debug('snackbar: click goto')}>
          this is a demo!
        </Snackbar>
      </div>
    )
  }
}

export default SnackbarExample

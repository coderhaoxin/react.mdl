
import { render } from 'react-dom'
import { Component } from 'react'

import {
  Button
} from '..'

class App extends Component {
  render() {
    return (
      <article>
        <section>
          <h4>Buttons</h4>
          <Button>button</Button>
          <Button floating={true} primary={true}>floating</Button>
        </section>
      </article>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}

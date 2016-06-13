
import { render } from 'react-dom'
import { Component } from 'react'

import {
  Checkbox,
  Button,
  Switch,
  Radio,
  Badge
} from '..'

class App extends Component {
  render() {
    return (
      <article>
        <section>
          <h4>Button</h4>
          <Button>button</Button>
          <Button floating={true} primary={true}>floating</Button>
        </section>

        <section>
          <h4>Badge</h4>
          <Badge data-badge='go'>context</Badge>
        </section>

        <section>
          <h4>checkbox</h4>
          <Checkbox label='hello world' />
        </section>

        <section>
          <h4>radio</h4>
          <Radio label='hello world' />
        </section>

        <section>
          <h4>switch</h4>
          <Switch label='hello world' />
        </section>
      </article>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}

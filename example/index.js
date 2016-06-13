
import { render } from 'react-dom'
import { Component } from 'react'

import {
  Progress,
  Checkbox,
  Spinner,
  Tooltip,
  Button,
  Switch,
  Slider,
  Radio,
  Badge
} from '..'

class App extends Component {
  state = {
    progress: 0,
    buffer: 0
  }

  componentDidMount() {
    setInterval(() => {
      const { progress, buffer } = this.state
      this.setState({
        progress: (progress + 10) % 100,
        buffer: (buffer + 5) % 50
      })
    }, 1000)
  }

  render() {
    const {
      progress,
      buffer
    } = this.state

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

        <section>
          <h4>tooltip</h4>
          <Tooltip htmlFor='tip' large={true}>tooltip!!!</Tooltip>
          <div id='tip'>hello world</div>
        </section>

        <section>
          <h4>slider</h4>
          <Slider min='1' max='10' />
        </section>

        <section>
          <h4>progress</h4>
          <Progress progress={progress} buffer={buffer} />
          <br /><br />
          <Progress indeterminate={true} />
        </section>

        <section>
          <h4>spinner</h4>
          <Spinner active={true} />
        </section>
      </article>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}

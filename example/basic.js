
import { Component } from 'react'

import {
  Progress,
  Spinner,
  Tooltip,
  Button,
  Slider,
  Badge,
  Icon,
  Tag
} from '..'

class BasicExample extends Component {
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
      <div>
        <section>
          <Progress id='top-progress' indeterminate />
          <Icon toggle type='keyboard_arrow_down' />
          <Icon type='keyboard_arrow_down' />
        </section>

        <section>
          <h4>Button</h4>
          <Button raised>button</Button>
          <Button floating primary raised>floating</Button>
        </section>

        <section>
          <h4>Badge</h4>
          <Badge data-badge='go'>hello</Badge>
        </section>

        <section>
          <h4>tooltip</h4>
          <Tooltip htmlFor='tip' large>tooltip!!!</Tooltip>
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
          <Progress indeterminate />
        </section>

        <section>
          <h4>spinner</h4>
          <Spinner active />
        </section>

        <section>
          <Tag name='default' />
          <Tag color='red' name='red' />
          <Tag name='red' onClose={() => console.info('close tag')} />
        </section>

      </div>
    )
  }
}

export default BasicExample


import { render } from 'react-dom'
import { Component } from 'react'

import TabExample from './tab'

import {
  TableExampleRender,
  TableExample
} from './table'

import './message'

import {
  TextField,
  Progress,
  Checkbox,
  Textarea,
  Spinner,
  Tooltip,
  Button,
  Switch,
  Slider,
  Radio,
  Badge,

  MenuItem,
  Menu
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
          <Badge data-badge='go'>hello</Badge>
        </section>

        <section>
          <h4>checkbox</h4>
          <Checkbox label='hello world' onChange={checked => console.info('checkbox', checked)} />
        </section>

        <section>
          <h4>radio</h4>
          <Radio label='hello world' onChange={checked => console.info('radio', checked)} />
        </section>

        <section>
          <h4>switch</h4>
          <Switch label='hello world' onChange={checked => console.info('switch', checked)} />
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

        <section>
          <h4>textarea</h4>
          <Textarea rows='4' cols='50' defaultValue='oh, yeah!'
            onChange={v => console.info('textarea', v)} />
          <Textarea rows='4' cols='50' label='hello, textarea' />
        </section>

        <section>
          <h4>text field</h4>
          <TextField />
          <br />
          <TextField label='hello input' floating={true} defaultValue='bingo'
            onChange={v => console.info('text', v)} />
          <br />
          <TextField pattern='-?[0-9]*(\.[0-9]+)?' label='number' error='u sb' floating={true} />
          <br />
          <TextField pattern='-?[0-9]*(\.[0-9]+)?' label='number' error='u sb' expandable={true} />
        </section>

        <section>
          <h4>menu</h4>
          <Menu direction='right-bottom'>
            <MenuItem onClick={() => console.info('click menu item: one')}>
              one
            </MenuItem>
            <MenuItem>two</MenuItem>
            <MenuItem>
              <a href='#'>hello</a>
            </MenuItem>
          </Menu>

          <Menu direction='top-right' icon='toc'>
            <MenuItem>one</MenuItem>
            <MenuItem>two</MenuItem>
            <MenuItem>
              <a href='#'>hello</a>
            </MenuItem>
          </Menu>
        </section>

        <section>
          <TabExample />
        </section>

        <section>
          <TableExample />
          <TableExampleRender />
        </section>
      </article>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}

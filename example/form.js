
import { Component } from 'react'

import {
  TextField,
  Checkbox,
  Textarea,
  Switch,
  Radio
} from '..'

class FormExample extends Component {

  state = {
    disabled: false,
    checked: false,
  }

  componentDidMount() {

    setInterval(() => {
      const { disabled, checked } = this.state

      this.setState({
        disabled: !disabled,
        checked: !checked
      })
    }, 3000)
  }

  render() {
    const {
      disabled,
      checked
    } = this.state

    return (
      <div>
        <section>
          <h4>switch</h4>
          <Switch label='hello world' onChange={checked => console.info('switch', checked)} />
          <Switch label='controlled disabled' disabled={disabled} />
          <Switch label='controlled checked' checked={checked} />
        </section>

        <section>
          <h4>checkbox</h4>
          <Checkbox label='hello world' onChange={checked => console.info('checkbox1', checked)} />
          <Checkbox id='checkbox2' label='hello world !'
            onChange={checked => console.info('checkbox2', checked)} />

          <Checkbox label='controlled disabled' disabled={disabled} />
          <Checkbox label='controlled checked' checked={checked} />
        </section>

        <section>
          <h4>radio</h4>
          <Radio label='hello world' onChange={checked => console.info('radio', checked)} />
          <Radio label='controlled disabled' disabled={disabled} />
          <Radio label='controlled checked' checked={checked} />
        </section>

        <section>
          <h4>textarea</h4>
          <Textarea id='textarea' rows='4' cols='50' defaultValue='oh, yeah!'
            onChange={v => console.info('textarea', v)} />
          <Textarea rows='4' cols='50' label='hello, textarea' />
        </section>

        <section>
          <h4>text field</h4>
          <TextField />
          <br />
          <TextField label='hello input' floating defaultValue='bingo'
            onChange={v => console.info('text', v)} />
          <br />
          <TextField pattern='-?[0-9]*(\.[0-9]+)?' label='number' error='u sb' floating />
          <br />
          <TextField pattern='-?[0-9]*(\.[0-9]+)?' label='number' error='u sb' expandable />
        </section>
      </div>
    )
  }
}

export default FormExample

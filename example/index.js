
import './message'

import { render } from 'react-dom'
import { Component } from 'react'

import SnackbarExample from './snackbar'
import DialogExample from './dialog'
import BasicExample from './basic'
import CardExample from './card'
import MenuExample from './menu'
import FormExample from './form'
import NavExample from './nav'
import TabExample from './tab'

import {
  TableExampleRender,
  TableExample
} from './table'

import {
  DateTimePicker
} from '..'

class App extends Component {

  render() {
    return (
      <article>
        <SnackbarExample />

        <DialogExample />

        <BasicExample />

        <CardExample />

        <FormExample />

        <MenuExample />

        <NavExample />

        <section>
          <TabExample />
        </section>

        <section>
          <TableExample />
          <TableExampleRender />
        </section>

        <section>
          <DateTimePicker id='datepicker-01' data-enabletime
            onChange={(v, e) => console.info(v, e)} />
        </section>
      </article>
    )
  }
}

window.init = () => {
  render(<App />, document.querySelector('#container'))
}

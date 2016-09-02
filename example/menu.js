
import { Component } from 'react'

import { Menu, MenuItem } from '..'

class MenuExample extends Component {
  render() {
    return (
      <section>
        <h4>menu</h4>
        <Menu direction='bottom-left'>
          <MenuItem onClick={() => console.info('click menu item: one')}>
            one
          </MenuItem>
          <MenuItem>two</MenuItem>
          <MenuItem>
            <a href='#'>hello</a>
          </MenuItem>
        </Menu>

        <br />
        <br />

        <Menu direction='bottom-right' icon='toc'>
          <MenuItem>one</MenuItem>
          <MenuItem>two</MenuItem>
          <MenuItem>
            <a href='#'>hello</a>
          </MenuItem>
        </Menu>
      </section>
    )
  }
}

export default MenuExample
